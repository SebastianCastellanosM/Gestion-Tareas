import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const taskResolvers = {
  Query: {
    getTask: async (_: any, { id }: { id: string }) => {
      return prisma.task.findUnique({
        where: { id },
      });
    },
    getTasks: async () => {
      return prisma.task.findMany();
    },
  },
  Mutation: {
    createTask: async (_: any, { title, description, projectId }: { title: string, description: string, projectId: string }) => {
      return prisma.task.create({
        data: { title, description, projectId },
      });
    },
    updateTask: async (_: any, { id, title, description }: { id: string, title: string, description: string }) => {
      return prisma.task.update({
        where: { id },
        data: { title, description },
      });
    },
    deleteTask: async (_: any, { id }: { id: string }) => {
      return prisma.task.delete({
        where: { id },
      });
    },
  },
};