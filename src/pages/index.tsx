import { useSession, signIn } from 'next-auth/react';
import React from 'react';
import Dashboard from '../components/organism/Dashboard';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="animate-spin h-10 w-10 border-t-4 border-blue-500 rounded-full" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Por favor, inicia sesión para acceder</h1>
          <button
            onClick={() => signIn('auth0', { callbackUrl: '/dashboard' })}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
}