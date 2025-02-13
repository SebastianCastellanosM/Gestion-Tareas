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
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Introducción */}
        <section className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <header className="text-4xl font-semibold text-gray-800 mb-6">Bienvenido a tu Pagina de Gestión de Tareas</header>
          <p className="text-lg text-gray-700">
           Este espacio está diseñado para que gestiones tus tareas de manera eficiente. Visualiza rápidamente el estado de tus tareas: completadas, pendientes o en progreso, y accede a una lista de las más recientes para mantenerte al tanto de lo que necesitas hacer.
          
          </p>
        </section>

        {/* Resumen de tareas (3 cajas horizontales) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ 
            { title: "Tareas Completadas", count: tasksData.completed, color: "blue", icon: "✔️" },
            { title: "Tareas Pendientes", count: tasksData.pending, color: "red", icon: "❗" },
            { title: "Tareas en Progreso", count: tasksData.inProgress, color: "yellow", icon: "🔄" }
          ].map(({ title, count, color, icon }) => (
            <div 
              key={title} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-between"
            >
              <div>
                <h3 className={`text-xl font-semibold text-gray-700`}>{title}</h3>
                <p className={`text-3xl font-semibold text-${color}-600`}>{count}</p>
              </div>
              <div className={`text-${color}-600 text-5xl`}>{icon}</div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Dashboard;