import React from 'react';
import Link from 'next/link';
import { Bell, Home, LineChart, Package, Package2, ShoppingCart, Users } from 'lucide-react';
import { Avatar, AvatarImage } from '@/src/components/ui/avatar';
import { Button } from '@/src/components/ui/button';
import { useSession } from 'next-auth/react';

const Sidebar = () => {
  const { data: session } = useSession(); // Obtener los datos de la sesión

  return (
    <div className="hidden md:block bg-gradient-to-tl from-blue-200 via-gray-200 to-purple-200 border-r h-screen sticky top-0">
      <div className="flex flex-col h-full p-6">
        
        {/* Título o nombre de la app */}
        <div className="flex items-center gap-2 font-semibold text-gray-800 mb-8">
          <Package2 className="h-8 w-8 text-blue-600" />
          <span className="text-2xl">Gestión Tareas</span>
        </div>

        {/* Menú de navegación */}
        <nav className="flex flex-col gap-4 text-sm font-medium flex-1">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-xl text-gray-700 transition-all hover:bg-blue-200 hover:text-blue-600"
          >
            <Home className="h-8 w-8" />
            Dashboard
          </Link>
          
          <Link
            href="/projects"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-xl text-gray-700 transition-all hover:bg-blue-200 hover:text-blue-600"
          >
            <ShoppingCart className="h-8 w-8" />
            Proyectos
          </Link>

          <Link
            href="/tasks"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-xl text-gray-700 transition-all hover:bg-blue-200 hover:text-blue-600"
          >
            <Package className="h-8 w-8" />
            Tareas
          </Link>

          {/* Solo mostrar para roles no 'USER' */}
          {session?.user?.role !== 'USER' && (
            <Link
              href="/users"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-xl text-gray-700 transition-all hover:bg-blue-200 hover:text-blue-600"
            >
              <LineChart className="h-8 w-8" />
              Usuarios
            </Link>
          )}

          {/* Separador visual */}
          <hr className="my-6 border-gray-300" />

          {/* Sección de Accesos Rápidos o Atajos */}
          <div className="text-xs text-gray-500 font-semibold uppercase">Atajos</div>
        </nav>

        {/* Perfil del usuario */}
        <div className="p-4">
          <div className="flex items-center gap-4 bg-white shadow-lg rounded-lg p-4">
            <Avatar>
              <AvatarImage src={session?.user?.image} alt="User Avatar" />
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">{session?.user?.name}</span>
              <span className="text-sm text-gray-600">{session?.user?.role}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;