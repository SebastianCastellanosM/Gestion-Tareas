import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

const ProyectsTable = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', description: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    const newEntry: Project = {
      id: projects.length + 1,
      name: newProject.name,
      description: newProject.description,
      createdAt: new Date().toLocaleDateString(),
    };

    setProjects([...projects, newEntry]);
    setNewProject({ name: '', description: '' });
    setShowModal(false);
  };

  return (
    <div className="w-full">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setShowModal(true)}
      >
        Crear Proyecto
      </button>

      {projects.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Nombre</th>
              <th className="border border-gray-300 px-4 py-2">Descripción</th>
              <th className="border border-gray-300 px-4 py-2">Fecha de Creación</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="border border-gray-300 px-4 py-2">{project.id}</td>
                <td className="border border-gray-300 px-4 py-2">{project.name}</td>
                <td className="border border-gray-300 px-4 py-2">{project.description}</td>
                <td className="border border-gray-300 px-4 py-2">{project.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay proyectos disponibles.</p>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Nuevo Proyecto</h2>
            <label className="block mb-2">
              Nombre:
              <input
                type="text"
                name="name"
                value={newProject.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-2 py-1 mt-1"
              />
            </label>
            <label className="block mb-4">
              Descripción:
              <textarea
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-2 py-1 mt-1"
              />
            </label>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={addProject}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProyectsTable;
