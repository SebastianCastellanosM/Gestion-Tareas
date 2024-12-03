"use client";

import { useEffect, useState } from "react";
import { DataTable } from "@/src/components/ui/datatable";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users"); // Llamada al backend
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    { id: "id", header: "N°", accessorKey: "id" },
    { id: "name", header: "Nombre", accessorKey: "name" },
    { id: "email", header: "Correo", accessorKey: "email" },
    { id: "role", header: "Rol", accessorKey: "role" },
    {
      id: "actions",
      header: "Acciones",
      cell: ({ row }: { row: any }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Acción</Button>
          </DropdownMenuTrigger>
          <DropdownMenuItem onClick={() => console.log(row.original)}>Editar</DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Eliminar")}>Eliminar</DropdownMenuItem>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Lista de Usuarios</h1>
        <Button>+ Nuevo Usuario</Button>
      </div>
      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <DataTable columns={columns} data={users} />
      )}
    </div>
  );
}
