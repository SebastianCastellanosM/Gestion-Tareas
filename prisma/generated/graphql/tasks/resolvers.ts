
    import prisma from '@/src/config/prisma';

    const TasksResolvers = {
    Tasks: {
        
                assignee: async (parent:any, _:any) => {
                  if (parent.assigneeId) {
                    return await prisma.user.findUnique({
                        where: {
                        id: parent.assigneeId,
                        },
                    });
                  }
                  else{
                    return null;
                  }
                }
                ,projectItems: async (parent:any, _:any) => {
                  return await prisma.projectItem.findMany({
                  where: {
                      task: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                }
    },
    Query: {
        taskss: async () => {
        return await prisma.tasks.findMany({});
        },
        tasks: async (_:any, args:any) => {
        return await prisma.tasks.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createTasks:async (_:any, args:any)=>{
        return await prisma.tasks.create({
          data:{...args.data,  }
        })
      },
      updateTasks:async (_:any, args:any)=>{
        return await prisma.tasks.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteTasks:async (_:any, args:any)=>{
        return await prisma.tasks.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { TasksResolvers };

    