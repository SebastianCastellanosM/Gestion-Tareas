'use client';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Título del Dashboard */}
        <header className="text-3xl font-semibold text-gray-800">Dashboard de Gestión de Tareas</header>

        {/* Sección de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card para tareas completadas */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Tareas Completadas</h3>
              <p className="text-3xl font-semibold text-blue-600">120</p>
            </div>
            <div className="text-blue-600 text-6xl">✔️</div>
          </div>

          {/* Card para tareas pendientes */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Tareas Pendientes</h3>
              <p className="text-3xl font-semibold text-red-600">45</p>
            </div>
            <div className="text-red-600 text-6xl">❗</div>
          </div>

          {/* Card para tareas en progreso */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Tareas en Progreso</h3>
              <p className="text-3xl font-semibold text-yellow-600">38</p>
            </div>
            <div className="text-yellow-600 text-6xl">🔄</div>
          </div>
        </div>

        {/* Sección de gráficos */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gráficos de Tareas</h2>
          
        </div>

        {/* Sección adicional de tareas o usuarios */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tareas Recientes</h2>
          <div className="space-y-4">
            {/* Aquí puedes agregar una tabla o una lista de tareas */}
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Tarea 1</span>
                <span className="text-gray-500">Pendiente</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Tarea 2</span>
                <span className="text-green-500">Completada</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Tarea 3</span>
                <span className="text-yellow-600">En progreso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
