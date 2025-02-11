import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET":
        return await getProjects(res);

      case "POST":
        return await createProject(req, res);

      case "PATCH":
        return await updateProject(req, res);

      case "DELETE":
        return await deleteProject(req, res);

      default:
        return res.status(405).json({ message: "Método no permitido" });
    }
  } catch (error) {
    console.error("Error en la API:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

const getProjects = async (res: NextApiResponse) => {
  const { data, error } = await supabase.from("Project").select("*");
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
};

const createProject = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ error: "El nombre es obligatorio" });

  const { data, error } = await supabase.from("Project").insert([{ name, description }]).select().single();
  if (error) return res.status(500).json({ error: error.message });

  return res.status(201).json(data);
};

const updateProject = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, description } = req.body;
  if (!id || !name) return res.status(400).json({ error: "ID y nombre son obligatorios" });

  const { data, error } = await supabase.from("Project").update({ name, description }).eq("id", id).select().single();
  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json(data);
};

const deleteProject = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: "El ID es obligatorio" });

  const { error } = await supabase.from("Project").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({ message: "Proyecto eliminado" });
};