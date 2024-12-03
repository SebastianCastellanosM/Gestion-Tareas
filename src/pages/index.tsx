// import { PrismaClient } from '@prisma/client';
// import safeJsonStringify from 'safe-json-stringify';
// import { useSession, signIn } from 'next-auth/react';
// import axios from 'axios';

import { useSession, signIn } from 'next-auth/react';
import React from "react";
import Charts from '../components/organism/Dashboard';

/* export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  return {
    props: {
      users: safeJsonStringify(users),
    },
  };
}

export default function Home({ users }: any) {
  const { data: session } = useSession();
  console.log('session', session, users);
  const getProducts = async () => {
    await axios.get('https://fakestoreapi.com/products').then((res: any) => {
      console.log('res', res);
    });
  };
  getProducts();

  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    ></div>
  );
} */
  
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
        <Charts />
      </div>
    );
  }
  