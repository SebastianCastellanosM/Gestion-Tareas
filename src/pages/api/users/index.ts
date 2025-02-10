import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/src/config/prisma";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, options);

  if (!session || session.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Acceso denegado" });
  }

  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany({
        select: { id: true, email: true, name: true, role: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: "Error al obtener usuarios" });
    }
  }

  if (req.method === "POST") {
    try {
      const { email, name, role } = req.body;

      if (!email || !role) {
        return res.status(400).json({ message: "Faltan datos obligatorios" });
      }

      const newUser = await prisma.user.create({
        data: { email, name, role },
      });

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: "Error al crear usuario" });
    }
  }

  return res.status(405).json({ message: "Método no permitido" });
}