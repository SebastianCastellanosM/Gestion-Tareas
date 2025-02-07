import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Crear un nuevo proyecto
    const { name, ownerId } = req.body;

    if (!name || !ownerId) {
      return res.status(400).json({ error: 'Nombre y Owner ID son obligatorios' });
    }

    const { data, error } = await supabase.from('projects').insert([{ name, owner_id: ownerId }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json(data[0]);
  } 
  
  else if (req.method === 'GET') {
    // Obtener todos los proyectos
    const { data, error } = await supabase.from('projects').select('*');

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  res.setHeader('Allow', ['POST', 'GET']);
  res.status(405).end(`Método ${req.method} no permitido`);
}
