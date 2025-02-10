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
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>

      {currentUserRole === "ADMIN" && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => setShowModal(true)}
        >
          + Agregar Usuario
        </button>
      )}

      {isLoading && <p>Cargando usuarios...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Correo</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Rol</th>
            <th className="border p-2">Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.name || "N/A"}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Agregar Nuevo Usuario</h2>
            <input
              type="text"
              placeholder="Correo electrónico"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Nombre"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="border p-2 w-full mb-4"
            >
              <option value="USER">Usuario</option>
              <option value="ADMIN">Administrador</option>
            </select>
            <div className="flex justify-between">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleCreateUser}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;