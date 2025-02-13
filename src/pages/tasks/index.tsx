import { useState, useEffect } from 'react';
import axios from 'axios';

interface Project {
  id: string;
  name: string;
}

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  projectId: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [newTask, setNewTask] = useState<{ title: string; description: string; completed: boolean }>({
    title: '',
    description: '',
    completed: false,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      fetchTasks(selectedProject);
    }
  }, [selectedProject]);

  const fetchTasks = async (projectId: string) => {
    try {
      const response = await axios.get(`/api/tasks?projectId=${projectId}`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

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
  
      setTasks((prevTasks) => [...prevTasks, response.data]); // Agregar la nueva tarea a la lista
      setNewTask({ title: '', description: '', completed: false });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Select a project:</label>
        <select
          className="border p-2 w-full"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">Choose a project</option>
          {projects.map((project: Project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={handleCreateTask}>
        Create Task
      </button>
      <ul className="mt-6">
        {tasks.map((task: Task) => (
          <li key={task.id} className="border-b p-2 flex justify-between">
            <span>
              {task.title} - {task.completed ? '✅' : '⏳'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}