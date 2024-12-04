import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/src/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'PUT') {
    const { name, ownerId } = req.body

    try {
      const updatedProject = await prisma.project.update({
        where: { id: Number(id) },
        data: {
          name,
          ownerId,
        },
      })
      return res.status(200).json(updatedProject)
    } catch (error) {
      return res.status(500).json({ error: 'Error actualizando el proyecto' })
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedProject = await prisma.project.delete({
        where: { id: Number(id) },
      })
      return res.status(200).json(deletedProject)
    } catch (error) {
      return res.status(500).json({ error: 'Error eliminando el proyecto' })
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' })
  }
} 

