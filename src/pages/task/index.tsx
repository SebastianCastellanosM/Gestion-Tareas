import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import prisma from '@/src/config/prisma';

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
  const router = useRouter();

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

  return (
    <div>
      <h1>Task Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        
        <select
          value={assigneeId}
          onChange={(e) => setAssigneeId(e.target.value)}
          required
        >
          <option value="">Assign User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <select
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          required
        >
          <option value="">Assign Project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>

        <button type="submit">{editingTask ? 'Edit Task' : 'Create Task'}</button>
      </form>

      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            {task.assignee && <p>Assigned to: {task.assignee.name}</p>}
            {task.project && <p>Project: {task.project.name}</p>}
            <button onClick={() => handleEdit(task)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const tasks = await prisma.task.findMany({
    include: {
      assignee: true,
      project: true,
    },
  });
  const users = await prisma.user.findMany();
  const projects = await prisma.project.findMany();
  
  return { props: { tasks, users, projects } };
}

export default TaskPage;
