import { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string | null;
  role: "ADMIN" | "USER";
  createdAt: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ email: "", name: "", role: "USER" });
  const [currentUserRole, setCurrentUserRole] = useState<"ADMIN" | "USER" | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Error al obtener usuarios");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCurrentUser = async () => {
      try {
        const response = await fetch("/api/auth/session");
        const session = await response.json();
        setCurrentUserRole(session?.user?.role || null);
      } catch {
        setCurrentUserRole(null);
      }
    };

    fetchUsers();
    fetchCurrentUser();
  }, []);

  const handleCreateUser = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Error al crear usuario");
      }

      const createdUser = await response.json();
      setUsers((prevUsers) => [createdUser, ...prevUsers]);
      setShowModal(false);
      setNewUser({ email: "", name: "", role: "USER" });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Gestión de Usuarios</h1>

        {currentUserRole === "ADMIN" && (
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-6 hover:bg-blue-700 transition-colors"
            onClick={() => setShowModal(true)}
          >
            + Agregar Usuario
          </button>
        )}

        {isLoading && <p className="text-center text-gray-500">Cargando usuarios...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-4 text-left text-sm text-gray-700">ID</th>
              <th className="border p-4 text-left text-sm text-gray-700">Correo</th>
              <th className="border p-4 text-left text-sm text-gray-700">Nombre</th>
              <th className="border p-4 text-left text-sm text-gray-700">Rol</th>
              <th className="border p-4 text-left text-sm text-gray-700">Fecha de Creación</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center hover:bg-gray-50 transition-colors">
                <td className="border p-4 text-sm">{user.id}</td>
                <td className="border p-4 text-sm">{user.email}</td>
                <td className="border p-4 text-sm">{user.name || "N/A"}</td>
                <td className="border p-4 text-sm">{user.role}</td>
                <td className="border p-4 text-sm">{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Agregar Nuevo Usuario</h2>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="border p-4 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Nombre"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="border p-4 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                className="border p-4 w-full mb-6 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="USER">Usuario</option>
                <option value="ADMIN">Administrador</option>
              </select>
              <div className="flex justify-between">
                <button
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  onClick={handleCreateUser}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;