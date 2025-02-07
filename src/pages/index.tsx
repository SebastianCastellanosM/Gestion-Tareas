// import { PrismaClient } from '@prisma/client';
// import safeJsonStringify from 'safe-json-stringify';
// import { useSession, signIn } from 'next-auth/react';
// import axios from 'axios';

import { useSession, signIn } from 'next-auth/react';
import React from "react";
import Dashboard from '../components/organism/Dashboard';
  
  export default function Home() {
    const { data: session, status } = useSession();
   
  
    // Mostrar un mensaje de carga mientras se verifica la sesión
    if (status === "loading") {
      return <div className="flex h-screen justify-center items-center">Cargando...</div>;
    }
  
    // Si no hay sesión, redirigir al usuario a la página de inicio de sesión
    if (!session) {
      return (
        <div className="flex h-screen justify-center items-center">
          <div>
            <h1 className="text-2xl mb-4">Por favor, inicia sesión para acceder</h1>
            <button
              onClick={() => signIn('auth0')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      );
    }
      
    // Si hay una sesión, renderizar el contenido
     return (
      <div >
        <Dashboard />
      </div>
   );
  }
  