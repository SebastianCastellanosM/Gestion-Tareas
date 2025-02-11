// graphql/custom/projects/resolvers.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const projectResolvers = {
  Query: {
    getProject: async (_: any, { id }: { id: string }) => {
      return prisma.project.findUnique({
        where: { id },
      });
    },
    getProjects: async () => {
      return prisma.project.findMany();
    },
  },
  Mutation: {
    createProject: async (_: any, { name, description }: { name: string, description: string }) => {
      return prisma.project.create({
        data: { name, description },
      });
    },
    updateProject: async (_: any, { id, name, description }: { id: string, name: string, description: string }) => {
      return prisma.project.update({
        where: { id },
        data: { name, description },
      });
    },
    deleteProject: async (_: any, { id }: { id: string }) => {
      return prisma.project.delete({
        where: { id },
      });
    },
  },
};
