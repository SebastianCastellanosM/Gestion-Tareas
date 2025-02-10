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
        const tasks = await prisma.task.findMany();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(500).json({ error: "Error al obtener las tareas" });
      }

    case "POST":
      if (session.user.role !== "ADMIN") {
        return res.status(403).json({ message: "No tienes permisos para crear tareas" });
      }

      try {
        const { title, description } = req.body;
        const newTask = await prisma.task.create({
          data: { title, description },
        });
        return res.status(201).json(newTask);
      } catch (error) {
        return res.status(500).json({ error: "Error al crear la tarea" });
      }

    case "PATCH":
      if (session.user.role !== "ADMIN") {
        return res.status(403).json({ message: "No tienes permisos para editar tareas" });
      }

      try {
        const { id, title, description } = req.body;
        const updatedTask = await prisma.task.update({
          where: { id },
          data: { title, description },
        });
        return res.status(200).json(updatedTask);
      } catch (error) {
        return res.status(500).json({ error: "Error al actualizar la tarea" });
      }

    case "DELETE":
      if (session.user.role !== "ADMIN") {
        return res.status(403).json({ message: "No tienes permisos para eliminar tareas" });
      }

      try {
        const { id } = req.body;
        await prisma.task.delete({ where: { id } });
        return res.status(200).json({ message: "Tarea eliminada" });
      } catch (error) {
        return res.status(500).json({ error: "Error al eliminar la tarea" });
      }

    default:
      return res.status(405).json({ message: "Método no permitido" });
  }
}