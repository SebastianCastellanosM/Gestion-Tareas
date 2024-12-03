import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      role: string;
      id: string;
      email: string;
      name?: string;
    };
  }
}