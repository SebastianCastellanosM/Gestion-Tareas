import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { createUser, updateUserRole } from '@/src/utils/api';

interface User {
  id: string;
  email: string;
  createdAt: string;
  role: string;
}

const Users = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    lastName: '',
  });

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [newRole, setNewRole] = useState<string>('');
  const [roles, setRoles] = useState<string[]>(['admin', 'user']);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const users = await fetch('/api/users').then((res) => res.json());
      setUsers(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setNewRole(user.role);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewRole(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);

    const password = nanoid(8);

    try {
      const usuario = await createUser({
        name: formData.name,
        email: formData.email,
        password,
      });
      setSuccess('Usuario creado exitosamente');
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        lastName: '',
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
      setError('Hubo un error al crear el usuario. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUserRole = async () => {
    if (!editingUser) return;

    setLoading(true);
    try {
      await updateUserRole(editingUser.id, newRole);
      setSuccess('Rol del usuario actualizado');
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      setError('Error al actualizar el rol del usuario');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Gestión de Usuarios</h1>
        <p className="text-lg text-gray-600 mb-6">Esta es la página de gestión de usuarios.</p>

        {error && (
          <p className="text-red-600 bg-red-100 p-3 rounded-md mb-4">{error}</p>
        )}
        {success && (
          <p className="text-green-600 bg-green-100 p-3 rounded-md mb-4">{success}</p>
        )}

        {/* Formulario para crear usuario */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Crear Usuario</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-full">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {loading ? 'Creando usuario...' : 'Crear usuario'}
            </button>
          </form>
        </div>

        {/* Tabla de usuarios */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Usuarios Registrados</h2>
          {loading ? (
            <p className="text-center text-gray-600">Cargando usuarios...</p>
          ) : (
            <table className="min-w-full table-auto border-collapse text-gray-800">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 border-b text-left">ID</th>
                  <th className="px-6 py-3 border-b text-left">Email</th>
                  <th className="px-6 py-3 border-b text-left">Fecha de Creación</th>
                  <th className="px-6 py-3 border-b text-left">Rol</th>
                  <th className="px-6 py-3 border-b text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">{user.id}</td>
                    <td className="px-6 py-4 border-b">{user.email}</td>
                    <td className="px-6 py-4 border-b">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 border-b">{user.role}</td>
                    <td className="px-6 py-4 border-b">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="text-blue-600 hover:underline"
                      >
                        Editar rol
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Modal para actualizar rol */}
        {editingUser && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Actualizar rol de usuario</h3>
              <div className="mb-4">
                <label htmlFor="role" className="block text-gray-700">Seleccionar rol</label>
                <select
                  id="role"
                  value={newRole}
                  onChange={handleRoleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between gap-4">
                <button
                  onClick={handleUpdateUserRole}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Actualizar
                </button>
                <button
                  onClick={() => setEditingUser(null)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;