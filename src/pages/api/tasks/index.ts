import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/src/config/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Obtener tareas del proyecto (GET)
    if (req.method === 'GET') {
      const { projectId } = req.query;
      if (!projectId || typeof projectId !== 'string') {
        return res.status(400).json({ error: 'Project ID is required' });
      }
      
      // Obtener tareas del proyecto
      const tasks = await prisma.task.findMany({
        where: { projectId },
      });

      // Contar las tareas por estado
      const completed = tasks.filter((task) => task.completed).length;
      const pending = tasks.filter((task) => !task.completed).length;

      return res.status(200).json({
        completed,
        pending,
        recentTasks: tasks, // Aquí devuelves las tareas completas
      });
    }

    // Crear una nueva tarea (POST)
    if (req.method === 'POST') {
      const { title, description, completed, userId, projectId } = req.body;
      
      if (!title || !projectId) {
        return res.status(400).json({ error: 'Title and Project ID are required' });
      }

      const newTask = await prisma.task.create({
        data: {
          title,
          description,
          completed: completed ?? false, // Aseguramos valor por defecto
          userId,
          projectId,
        },
      });

      return res.status(201).json(newTask);
    }

    // Actualizar el estado de una tarea (PUT)
    if (req.method === 'PUT') {
      const { id, completed } = req.body;
      if (!id || typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'ID and task status are required' });
      }

      const updatedTask = await prisma.task.update({
        where: { id },
        data: { completed },
      });

      return res.status(200).json(updatedTask);
    }

    // Si el método no es uno de los permitidos
    res.setHeader('Allow', ['GET', 'POST', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
