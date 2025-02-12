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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Proyectos</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nombre del proyecto"
          className="border p-2 mr-2"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          className="border p-2 mr-2"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <button
          className="bg-blue-500 text-white p-2"
          onClick={handleCreateProject}
          disabled={loading}
        >
          {loading ? 'Creando...' : 'Crear Proyecto'}
        </button>
      </div>
      {editingProject && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre del proyecto"
            className="border p-2 mr-2"
            value={editingProject.name}
            onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descripción"
            className="border p-2 mr-2"
            value={editingProject.description}
            onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
          />
          <button
            className="bg-green-500 text-white p-2"
            onClick={handleUpdateProject}
            disabled={loading}
          >
            {loading ? 'Actualizando...' : 'Actualizar Proyecto'}
          </button>
        </div>
      )}
      {loading && <p>Cargando proyectos...</p>}
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border p-2 my-2">
            <h2 className="font-bold">{project.name}</h2>
            <p>{project.description}</p>
            <button
              className="bg-yellow-500 text-white p-2 mr-2"
              onClick={() => setEditingProject(project)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white p-2"
              onClick={() => handleDeleteProject(project.id)}
              disabled={loading}
            >
              {loading ? 'Eliminando...' : 'Eliminar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}