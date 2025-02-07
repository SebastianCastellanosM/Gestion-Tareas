import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/src/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, ownerId } = req.body

    try {
      const project = await prisma.project.create({
        data: {
          name,
          ownerId,
        },
      })
      return res.status(201).json(project)
    } catch (error) {
      return res.status(500).json({ error: 'Error creando el proyecto' })
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' })
  }
}
