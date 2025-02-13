import { useState, useEffect } from 'react';
import axios from 'axios';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  projectId: string;
}

interface Project {
  id: string;
  name: string;
}

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [newTask, setNewTask] = useState<{ title: string; description: string; completed: boolean }>({
    title: '',
    description: '',
    completed: false,
  });

  // Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Fetch Tasks by Project ID
  useEffect(() => {
    if (selectedProject) {
      const fetchTasks = async () => {
        try {
          const response = await axios.get(`/api/tasks?projectId=${selectedProject}`);
          setTasks(response.data.recentTasks);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };

      fetchTasks();
    }
  }, [selectedProject]);

  // Handle Task Creation
  const handleCreateTask = async () => {
    if (!selectedProject || !newTask.title.trim()) {
      alert('Please select a project and provide a title');
      return;
    }

    try {
      const response = await axios.post('/api/tasks', {
        title: newTask.title,
        description: newTask.description,
        completed: newTask.completed,
        projectId: selectedProject,
      });

      setTasks((prevTasks) => [...prevTasks, response.data]);
      setNewTask({ title: '', description: '', completed: false });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  // Handle Task Completion Toggle
  const handleToggleTaskCompletion = async (taskId: string, currentStatus: boolean) => {
    try {
      const response = await axios.put('/api/tasks', {
        id: taskId,
        completed: !currentStatus,
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: response.data.completed } : task
        )
      );
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Gestión de tareas</h1>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium">Selecciona un proyecto:</label>
          <select
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            <option value="">Elige un Proyecto</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Titulo de la tarea"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
        </div>

        <div className="mb-6">
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Descripción"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={handleCreateTask}
        >
          Create Task
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Lista de Tareas</h2>
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="border p-4 rounded-lg shadow-sm flex justify-between items-center transition-transform transform hover:scale-105"
              >
                <div>
                  <h3 className="text-lg font-semibold">{task.title}</h3>
                  {task.description && <p className="text-gray-600 mt-1">{task.description}</p>}
                </div>

                <div className="flex space-x-4">
                  <span
                    onClick={() => handleToggleTaskCompletion(task.id, task.completed)}
                    className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium ${
                      task.completed ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    } transition-colors`}
                  >
                    {task.completed ? 'Completa' : 'En Progreso'}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;