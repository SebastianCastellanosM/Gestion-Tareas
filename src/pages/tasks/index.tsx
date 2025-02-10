import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

const Tasks = ({ session }) => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  const handleCreateTask = async () => {
    if (!newTask.title || !newTask.description) return;

    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    if (res.ok) {
      fetchTasks();
      setNewTask({ title: "", description: "" });
    }
  };

  const handleEditTask = async () => {
    if (!taskToEdit?.title || !taskToEdit?.description) return;

    const res = await fetch("/api/tasks", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskToEdit),
    });

    if (res.ok) {
      fetchTasks();
      setTaskToEdit(null);
    }
  };

  const handleDeleteTask = async (id) => {
    const res = await fetch("/api/tasks", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      fetchTasks();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tareas</h1>

      {/* Crear Tarea (Solo para ADMIN) */}
      {session.user.role === "ADMIN" && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Título de la Tarea"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Descripción"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="border p-2 mr-2"
          />
          <button onClick={handleCreateTask} className="bg-blue-500 text-white px-4 py-2">
            Crear Tarea
          </button>
        </div>
      )}

      {/* Modal de edición */}
      {taskToEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold">Editar Tarea</h2>
            <input
              type="text"
              value={taskToEdit.title}
              onChange={(e) => setTaskToEdit({ ...taskToEdit, title: e.target.value })}
              className="border p-2 w-full my-2"
            />
            <input
              type="text"
              value={taskToEdit.description}
              onChange={(e) => setTaskToEdit({ ...taskToEdit, description: e.target.value })}
              className="border p-2 w-full my-2"
            />
            <button onClick={handleEditTask} className="bg-green-500 text-white px-4 py-2 mr-2">
              Guardar
            </button>
            <button onClick={() => setTaskToEdit(null)} className="bg-gray-500 text-white px-4 py-2">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Lista de Tareas */}
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Título</th>
            <th className="p-2">Descripción</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="p-2">{task.id}</td>
              <td className="p-2">{task.title}</td>
              <td className="p-2">{task.description}</td>
              <td className="p-2">
                {session.user.role === "ADMIN" && (
                  <>
                    <button
                      onClick={() => setTaskToEdit(task)}
                      className="bg-yellow-500 text-white px-4 py-2 mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="bg-red-500 text-white px-4 py-2"
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;