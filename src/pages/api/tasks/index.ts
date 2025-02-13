import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/src/config/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { projectId } = req.query;
      if (!projectId || typeof projectId !== 'string') {
        return res.status(400).json({ error: 'Project ID is required' });
      }
      const tasks = await prisma.task.findMany({ where: { projectId } });
      return res.status(200).json(tasks);
    }

    if (req.method === 'POST') {
      const { title, description, completed, userId, projectId } = req.body;
      
      if (!title || !projectId) {
        return res.status(400).json({ error: 'Title and Project ID are required' });
      }

      const newTask = await prisma.task.create({
        data: {
          title,
          description,
          completed: completed ?? false, // Asegurar valor por defecto
          userId,
          projectId,
        },
      });

      return res.status(201).json(newTask);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}