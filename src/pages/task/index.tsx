import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import prisma from '@/src/config/prisma';

// Interfaces
interface Task {
  id: number;
  title: string;
  assigneeId: number | null;
  assignee: { name: string } | null;
  projectId: number | null;
  project: { name: string } | null;
}

interface User {
  id: number;
  name: string;
}

interface Project {
  id: number;
  name: string;
}

interface TaskPageProps {
  tasks: Task[];
  users: User[];
  projects: Project[];
}

const TaskPage = ({ tasks, users, projects }: TaskPageProps) => {
  const [title, setTitle] = useState<string>('');
  const [assigneeId, setAssigneeId] = useState<string>('');
  const [projectId, setProjectId] = useState<string>('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const taskData = { title, assigneeId: parseInt(assigneeId), projectId: parseInt(projectId) };

    if (editingTask) {
      await fetch(`/api/task/${editingTask.id}`, {
        method: 'PUT',
        body: JSON.stringify(taskData),
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      await fetch('/api/task', {
        method: 'POST',
        body: JSON.stringify(taskData),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    setTitle('');
    setAssigneeId('');
    setProjectId('');
    setEditingTask(null);
    router.reload();
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
    setAssigneeId(task.assigneeId?.toString() || '');
    setProjectId(task.projectId?.toString() || '');
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/task/${id}`, { method: 'DELETE' });
    router.reload();
  };

  // JSX Render
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Task Management</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Assignee Dropdown */}
        <div>
          <select
            value={assigneeId}
            onChange={(e) => setAssigneeId(e.target.value)}
            required
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Assign User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        {/* Project Dropdown */}
        <div>
          <select
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            required
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Assign Project</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {editingTask ? 'Edit Task' : 'Create Task'}
        </button>
      </form>

      {/* Search Bar */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search Tasks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Task List</h2>
      <ul className="space-y-4">
        {filteredTasks.map((task) => (
          <li key={task.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">{task.title}</h3>

            {task.assignee && (
              <p className="text-gray-600">
                Assigned to: <span className="font-medium">{task.assignee.name}</span>
              </p>
            )}

            {task.project && (
              <p className="text-gray-600">
                Project: <span className="font-medium">{task.project.name}</span>
              </p>
            )}

            {/* Action Buttons */}
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleEdit(task)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Server-side Rendering to fetch data
export async function getServerSideProps() {
  const tasks = await prisma.tasks.findMany({
    include: {
      assignee: true,
      projectItems: {
        include: {
          project: true,  // Aquí accedemos al 'project' a través de 'projectItems'
        },
      },
    },
  });

  // Convertir fechas en tasks a ISO strings
  const serializedTasks = tasks.map((task) => ({
    ...task,
    createdAt: task.createdAt.toISOString(),
    updatedAt: task.updatedAt.toISOString(),
    projectItems: task.projectItems.map((projectItem) => ({
      ...projectItem,
      createdAt: projectItem.createdAt.toISOString(),
      updatedAt: projectItem.updatedAt.toISOString(),
      project: projectItem.project
        ? {
            ...projectItem.project,
            createdAt: projectItem.project.createdAt.toISOString(),
            updatedAt: projectItem.project.updatedAt.toISOString(),
          }
        : null,
    })),
  }));

  const users = await prisma.user.findMany();
  const serializedUsers = users.map((user) => ({
    ...user,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  }));

  const projects = await prisma.project.findMany();
  const serializedProjects = projects.map((project) => ({
    ...project,
    createdAt: project.createdAt.toISOString(),
    updatedAt: project.updatedAt.toISOString(),
  }));

  return {
    props: {
      tasks: serializedTasks,
      users: serializedUsers,
      projects: serializedProjects,
    },
  };
}

export default TaskPage;
