import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/src/config/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, assigneeId, projectId } = JSON.parse(req.body);
    try {
      const newTask = await prisma.task.create({
        data: { title, assigneeId, projectId },
      });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: 'Error creating task' });
    }
  } else {
    res.status(405).end();
  }
}
