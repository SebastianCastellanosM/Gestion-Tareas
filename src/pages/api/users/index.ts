import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/src/lib/prisma'; // Asegúrate de tener tu prisma correctamente configurado

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Obtener la sesión del usuario autenticado
  const session = await getSession({ req });

  // Verificar si la sesión existe
  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  // Verificar si el usuario tiene el rol adecuado (por ejemplo, 'ADMIN')
  if (session.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Forbidden, not an admin' });
  }

  // Si todo está bien, proceder con la consulta o lo que sea necesario
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users); // Devuelve los usuarios
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
}
