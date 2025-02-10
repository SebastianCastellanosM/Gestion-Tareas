import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

const Projects = ({ session }) => {
  const [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  const handleCreateProject = async () => {
    if (!newProject.name || !newProject.description) return;

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });

    if (res.ok) {
      fetchProjects();
      setNewProject({ name: "", description: "" });
    }
  };

  const handleEditProject = async () => {
    if (!projectToEdit?.name || !projectToEdit?.description) return;

    const res = await fetch("/api/projects", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectToEdit),
    });

    if (res.ok) {
      fetchProjects();
      setProjectToEdit(null);
    }
  };

  const handleDeleteProject = async (id) => {
    const res = await fetch("/api/projects", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      fetchProjects();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Proyectos</h1>

      {/* Crear Proyecto (Solo para ADMIN) */}
      {session.user.role === "ADMIN" && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Nombre del Proyecto"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Descripción"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="border p-2 mr-2"
          />
          <button onClick={handleCreateProject} className="bg-blue-500 text-white px-4 py-2">
            Crear Proyecto
          </button>
        </div>
      )}

      {/* Modal de edición */}
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
              value={projectToEdit.description}
              onChange={(e) => setProjectToEdit({ ...projectToEdit, description: e.target.value })}
              className="border p-2 w-full my-2"
            />
            <button onClick={handleEditProject} className="bg-green-500 text-white px-4 py-2 mr-2">
              Guardar
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
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-t">
              <td className="p-2">{project.id}</td>
              <td className="p-2">{project.name}</td>
              <td className="p-2">{project.description}</td>
              <td className="p-2">
                {session.user.role === "ADMIN" && (
                  <>
                    <button
                      onClick={() => setProjectToEdit(project)}
                      className="bg-yellow-500 text-white px-4 py-2 mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="bg-red-500 text-white px-4 py-2"
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;