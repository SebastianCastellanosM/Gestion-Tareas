import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<{ name: string; description: string }>({
    name: "",
    description: "",
  });
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error("Error al obtener proyectos:", err);
      setError("No se pudieron cargar los proyectos.");
    }
  };

  const handleCreateProject = async () => {
    if (!newProject.name) return;
    setLoading(true);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });
      if (!res.ok) throw new Error("Error al crear el proyecto");
      fetchProjects();
      setNewProject({ name: "", description: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProject = async () => {
    if (!projectToEdit) return;
    setLoading(true);
    try {
      const res = await fetch("/api/projects", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectToEdit),
      });
      if (!res.ok) throw new Error("Error al actualizar el proyecto");
      fetchProjects();
      setProjectToEdit(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/projects", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }), // Ahora sí enviamos el ID correctamente
      });
      if (!res.ok) throw new Error("Error al eliminar el proyecto");
      fetchProjects();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Proyectos</h1>
      {error && <p className="text-red-500">{error}</p>}

      {/* Crear Proyecto */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Nombre del Proyecto"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          className="border p-2"
        />
        <button onClick={handleCreateProject} className="bg-blue-500 text-white px-4 py-2" disabled={loading}>
          {loading ? "Creando..." : "Crear Proyecto"}
        </button>
      </div>

      {/* Modal de Edición */}
      {projectToEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold">Editar Proyecto</h2>
            <input
              type="text"
              value={projectToEdit.name}
              onChange={(e) => setProjectToEdit({ ...projectToEdit, name: e.target.value })}
              className="border p-2 w-full my-2"
            />
            <input
              type="text"
              value={projectToEdit.description || ""}
              onChange={(e) => setProjectToEdit({ ...projectToEdit, description: e.target.value })}
              className="border p-2 w-full my-2"
            />
            <button onClick={handleEditProject} className="bg-green-500 text-white px-4 py-2 mr-2" disabled={loading}>
              {loading ? "Guardando..." : "Guardar"}
            </button>
            <button onClick={() => setProjectToEdit(null)} className="bg-gray-500 text-white px-4 py-2">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Lista de Proyectos */}
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Nombre</th>
            <th className="p-2">Descripción</th>
            <th className="p-2">Fecha</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-t">
              <td className="p-2">{project.id}</td>
              <td className="p-2">{project.name}</td>
              <td className="p-2">{project.description || "Sin descripción"}</td>
              <td className="p-2">{new Date(project.createdAt).toLocaleDateString()}</td>
              <td className="p-2">
                <button onClick={() => setProjectToEdit(project)} className="bg-yellow-500 text-white px-4 py-2 mr-2">
                  Editar
                </button>
                <button onClick={() => handleDeleteProject(project.id)} className="bg-red-500 text-white px-4 py-2" disabled={loading}>
                  {loading ? "Eliminando..." : "Eliminar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;