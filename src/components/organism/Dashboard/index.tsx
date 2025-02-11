'use client';

import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"; // Usa variables de entorno

const Dashboard = () => {
  const [tasksData, setTasksData] = useState({
    completed: 0,
    pending: 0,
    inProgress: 0,
    recentTasks: [],
  });

  const [loading, setLoading] = useState(false); // Estado de carga

  // Función para obtener los datos de tareas desde la API
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      const { completed, pending, inProgress, recentTasks } = response.data;
      setTasksData({ completed, pending, inProgress, recentTasks });
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="text-3xl font-semibold text-gray-800">Dashboard de Gestión de Tareas</header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Tareas Completadas", count: tasksData.completed, color: "blue", icon: "✔️" },
            { title: "Tareas Pendientes", count: tasksData.pending, color: "red", icon: "❗" },
            { title: "Tareas en Progreso", count: tasksData.inProgress, color: "yellow", icon: "🔄" },
          ].map(({ title, count, color, icon }) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h3 className={`text-xl font-medium text-gray-700`}>{title}</h3>
                <p className={`text-3xl font-semibold text-${color}-600`}>{count}</p>
              </div>
              <div className={`text-${color}-600 text-6xl`}>{icon}</div>
            </div>
          ))}
        </div>

        <button
          className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={fetchTasks}
          disabled={loading}
        >
          {loading ? "Cargando..." : "Actualizar Dashboard"}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;