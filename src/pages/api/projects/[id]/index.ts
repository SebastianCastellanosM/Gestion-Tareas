import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'ID del proyecto es requerido' });
  }

  if (req.method === 'GET') {
    // Obtener un solo proyecto
    const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();

    if (error) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    return res.status(200).json(data);
  } 
  
  else if (req.method === 'PUT') {
    // Actualizar un proyecto
    const { name, ownerId } = req.body;

    const { data, error } = await supabase.from('projects').update({ name, owner_id: ownerId }).eq('id', id);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } 
  
  else if (req.method === 'DELETE') {
    // Eliminar un proyecto
    const { error } = await supabase.from('projects').delete().eq('id', id);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Proyecto eliminado' });
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  res.status(405).end(`Método ${req.method} no permitido`);
}