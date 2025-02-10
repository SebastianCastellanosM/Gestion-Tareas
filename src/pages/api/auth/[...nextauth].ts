import NextAuth, { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/src/config/prisma';

const options: NextAuthOptions = {
  callbacks: {
    async session({ session, user }: any) {
      console.log("Session callback:", session, user); // Para depurar
      const newSession = await prisma.session.findFirst({
        where: {
          userId: user.id,
        },
        include: {
          user: true,
        },
        orderBy: {
          expires: 'desc',
        },
      }) as any;

      return {
        ...session,
        user: newSession?.user,
        token: newSession?.sessionToken,
      };
    },
  },
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: `https://${process.env.AUTH0_DOMAIN}`,
    }),
  ],
  secret: process.env.AUTH0_CLIENT_SECRET,
  adapter: PrismaAdapter(prisma),
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
export { options };