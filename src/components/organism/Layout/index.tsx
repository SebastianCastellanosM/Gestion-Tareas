import { useEffect } from 'react';
import Sidebar from '@/src/components/molecules/Sidebar';
import Navbar from '@/src/components/molecules/Navbar';
import { useSession, signIn } from 'next-auth/react';
import { ReactNode } from 'react';

interface DashboardProps {
  children: ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn('auth0');
    }
  }, [status]); // 🔹 Solo se ejecuta cuando `status` cambia a 'unauthenticated'

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Cargando...</p>
      </div>
    );
  }

  if (!session) {
    return null; // 🔹 Evita renderizar contenido hasta que `signIn` haga su trabajo
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">{children}</main>
      </div>
    </div>
  );
}