import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/src/config/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { title, assigneeId, projectId } = JSON.parse(req.body);
    try {
      const updatedTask = await prisma.task.update({
        where: { id: parseInt(id as string) },
        data: { title, assigneeId, projectId },
      });
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: 'Error updating task' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.task.delete({
        where: { id: parseInt(id as string) },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting task' });
    }
  } else {
    res.status(405).end();
  }
}
