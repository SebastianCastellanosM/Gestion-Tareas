// graphql/custom/users/resolvers.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const userResolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return prisma.user.findUnique({
        where: { id },
      });
    },
    getUsers: async () => {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email }: { name: string; email: string }) => {
      return prisma.user.create({
        data: { name, email },
      });
    },
    updateUser: async (_: any, { id, name, email }: { id: string; name: string; email: string }) => {
      return prisma.user.update({
        where: { id },
        data: { name, email },
      });
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      return prisma.user.delete({
        where: { id },
      });
    },
  },
};