import { PrismaClient, Task } from '@prisma/client';
const prisma = new PrismaClient();

export const taskResolvers = {
  Query: {
    getTask: async (_: unknown, { id }: { id: string }): Promise<Task | null> => {
      try {
        const task = await prisma.task.findUnique({
          where: { id },
        });
        if (!task) {
          throw new Error("Task not found");
        }
        return task;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Error fetching task: ${error.message}`);
        }
        throw new Error("Unknown error occurred while fetching task");
      }
    },
    getTasks: async (): Promise<Task[]> => {
      return prisma.task.findMany();
    },
  },
  Mutation: {
    createTask: async (_: unknown, { title, description, projectId }: { title: string, description: string, projectId: string }): Promise<Task> => {
      return prisma.task.create({
        data: { title, description, projectId },
      });
    },
    updateTask: async (_: unknown, { id, title, description }: { id: string, title: string, description: string }): Promise<Task> => {
      return prisma.task.update({
        where: { id },
        data: { title, description },
      });
    },
    deleteTask: async (_: unknown, { id }: { id: string }): Promise<Task> => {
      return prisma.task.delete({
        where: { id },
      });
    },
  },
};