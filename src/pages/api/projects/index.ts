import { NextApiRequest, NextApiResponse } from 'next';
import { Prisma, Project } from '@prisma/client';
import prisma from '@/src/config/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { userId } = req.query;
    try {
      const proyectos = userId
        ? await prisma.project.findMany({
            where: { users: { some: { id: userId as string } } },
            include: { users: true, tasks: true }
          })
        : await prisma.project.findMany({ include: { users: true, tasks: true } });
      return res.status(200).json(proyectos);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener proyectos' });
    }
  }
  
  if (req.method === 'POST') {
    const { name, description, userIds } = req.body;
    if (!name || !Array.isArray(userIds) || userIds.length === 0) {
      return res.status(400).json({ error: 'Nombre y al menos un userId son obligatorios' });
    }
    try {
      const proyecto = await prisma.project.create({
        data: {
          name,
          description,
          users: { connect: userIds.map((id: string) => ({ id })) }
        },
        include: { users: true }
      });
      return res.status(201).json(proyecto);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(400).json({ error: 'Error en la creación del proyecto' });
      }
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  if (req.method === 'PUT') {
    const { id, name, description, addUserIds, removeUserIds } = req.body;
    if (!id) return res.status(400).json({ error: 'ID del proyecto es obligatorio' });
    
    try {
      const data: any = { name, description, users: {} };
      if (Array.isArray(addUserIds) && addUserIds.length) {
        data.users.connect = addUserIds.map((id: string) => ({ id }));
      }
      if (Array.isArray(removeUserIds) && removeUserIds.length) {
        data.users.disconnect = removeUserIds.map((id: string) => ({ id }));
      }
      const proyecto = await prisma.project.update({
        where: { id },
        data,
        include: { users: true }
      });
      return res.status(200).json(proyecto);
    } catch (error) {
      return res.status(500).json({ error: 'Error al actualizar el proyecto' });
    }
  }
  
  if (req.method === 'DELETE') {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: 'ID del proyecto es obligatorio' });
    
    try {
      await prisma.project.delete({ where: { id } });
      return res.status(200).json({ message: 'Proyecto eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar el proyecto' });
    }
  }

  return res.status(405).json({ error: 'Método no permitido' });
}