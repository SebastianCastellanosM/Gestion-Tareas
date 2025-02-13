import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface Project {
  id: string;
  name: string;
  description?: string;
}

export default function ProjectsPage() {
  const { data: session } = useSession();
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      setError('Error al cargar proyectos');
    }
    setLoading(false);
  };

  const handleCreateProject = async () => {
    if (!newProject.name || !session?.user?.id) return;
    setLoading(true);
    try {
      const response = await axios.post('/api/projects', {
        name: newProject.name,
        description: newProject.description,
        userIds: [session.user.id],
      });
      setProjects([...projects, response.data]);
      setNewProject({ name: '', description: '' });
    } catch (error) {
      setError('Error al crear el proyecto');
    }
    setLoading(false);
  };

  const handleUpdateProject = async () => {
    if (!editingProject) return;
    setLoading(true);
    try {
      const response = await axios.put('/api/projects', editingProject);
      setProjects(projects.map((p) => (p.id === editingProject.id ? response.data : p)));
      setEditingProject(null);
    } catch (error) {
      setError('Error al actualizar el proyecto');
    }
    setLoading(false);
  };

  const handleDeleteProject = async (id: string) => {
    setLoading(true);
    try {
      await axios.delete('/api/projects', { data: { id } });
      setProjects(projects.filter((p) => p.id !== id));
    } catch (error) {
      setError('Error al eliminar el proyecto');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Título y Error */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Proyectos</h1>
        {error && <p className="text-red-500">{error}</p>}

        {/* Formulario de creación de proyecto */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Nombre del proyecto"
            className="border p-3 mb-4 sm:mb-0 sm:mr-4 rounded-lg flex-1"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descripción"
            className="border p-3 mb-4 sm:mb-0 sm:mr-4 rounded-lg flex-1"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          />
          <button
            className="bg-blue-600 text-white p-3 rounded-lg w-full sm:w-auto mt-4 sm:mt-0"
            onClick={handleCreateProject}
            disabled={loading}
          >
            {loading ? 'Creando...' : 'Crear Proyecto'}
          </button>
        </div>

        {/* Edición de proyecto */}
        {editingProject && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="Nombre del proyecto"
              className="border p-3 mb-4 sm:mb-0 sm:mr-4 rounded-lg flex-1"
              value={editingProject.name}
              onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Descripción"
              className="border p-3 mb-4 sm:mb-0 sm:mr-4 rounded-lg flex-1"
              value={editingProject.description}
              onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
            />
            <button
              className="bg-green-600 text-white p-3 rounded-lg w-full sm:w-auto mt-4 sm:mt-0"
              onClick={handleUpdateProject}
              disabled={loading}
            >
              {loading ? 'Actualizando...' : 'Actualizar Proyecto'}
            </button>
          </div>
        )}

        {/* Cargando proyectos */}
        {loading && <p className="text-gray-500">Cargando proyectos...</p>}

        {/* Lista de proyectos */}
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="bg-white p-6 mb-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{project.name}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  className="bg-yellow-500 text-white p-3 rounded-lg"
                  onClick={() => setEditingProject(project)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white p-3 rounded-lg"
                  onClick={() => handleDeleteProject(project.id)}
                  disabled={loading}
                >
                  {loading ? 'Eliminando...' : 'Eliminar'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}