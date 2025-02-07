'use client';

import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [tasksData, setTasksData] = useState({
    completed: 0,
    pending: 0,
    inProgress: 0,
    recentTasks: [],
  });

  // Función para obtener los datos de tareas desde la API
  const fetchTasks = async () => {
    try {
      const response = await axios.get("https://localhost:3000/tasks");
      setTasksData({
        completed: response.data.completed,
        pending: response.data.pending,
        inProgress: response.data.inProgress,
        recentTasks: response.data.recentTasks,
      });
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Carga los datos al montar el componente
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="text-3xl font-semibold text-gray-800">Dashboard de Gestión de Tareas</header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Tareas Completadas</h3>
              <p className="text-3xl font-semibold text-blue-600">{tasksData.completed}</p>
            </div>
            <div className="text-blue-600 text-6xl">✔️</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Tareas Pendientes</h3>
              <p className="text-3xl font-semibold text-red-600">{tasksData.pending}</p>
            </div>
            <div className="text-red-600 text-6xl">❗</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Tareas en Progreso</h3>
              <p className="text-3xl font-semibold text-yellow-600">{tasksData.inProgress}</p>
            </div>
            <div className="text-yellow-600 text-6xl">🔄</div>
          </div>
        </div>

        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={fetchTasks} // Botón de prueba para actualizar
        >
          Actualizar Dashboard
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
