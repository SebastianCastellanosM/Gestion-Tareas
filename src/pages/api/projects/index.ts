import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "No autorizado" });
  }

  switch (req.method) {
    case "GET":
      try {
        const projects = await prisma.project.findMany();
        return res.status(200).json(projects);
      } catch (error) {
        return res.status(500).json({ error: "Error al obtener los proyectos" });
      }

    case "POST":
      if (session.user.role !== "ADMIN") {
        return res.status(403).json({ message: "No tienes permisos para crear proyectos" });
      }

      try {
        const { name, description } = req.body;
        const newProject = await prisma.project.create({
          data: { name, description },
        });
        return res.status(201).json(newProject);
      } catch (error) {
        return res.status(500).json({ error: "Error al crear el proyecto" });
      }

    case "PATCH":
      if (session.user.role !== "ADMIN") {
        return res.status(403).json({ message: "No tienes permisos para editar proyectos" });
      }

      try {
        const { id, name, description } = req.body;
        const updatedProject = await prisma.project.update({
          where: { id },
          data: { name, description },
        });
        return res.status(200).json(updatedProject);
      } catch (error) {
        return res.status(500).json({ error: "Error al actualizar el proyecto" });
      }

    case "DELETE":
      if (session.user.role !== "ADMIN") {
        return res.status(403).json({ message: "No tienes permisos para eliminar proyectos" });
      }

      try {
        const { id } = req.body;
        await prisma.project.delete({ where: { id } });
        return res.status(200).json({ message: "Proyecto eliminado" });
      } catch (error) {
        return res.status(500).json({ error: "Error al eliminar el proyecto" });
      }

    default:
      return res.status(405).json({ message: "Método no permitido" });
  }
}