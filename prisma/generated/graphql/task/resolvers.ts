
    import prisma from 'config/prisma';

    const TaskResolvers = {
    Task: {
        
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
                ,
                project: async (parent:any, _:any) => {
                  if (parent.projectId) {
                    return await prisma.project.findUnique({
                        where: {
                        id: parent.projectId,
                        },
                    });
                  }
                  else{
                    return null;
                  }
                }
                
    },
    Query: {
        tasks: async () => {
        return await prisma.task.findMany({});
        },
        task: async (_:any, args:any) => {
        return await prisma.task.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createTask:async (_:any, args:any)=>{
        return await prisma.task.create({
          data:{...args.data,  }
        })
      },
      updateTask:async (_:any, args:any)=>{
        return await prisma.task.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteTask:async (_:any, args:any)=>{
        return await prisma.task.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    },

    export { TaskResolvers };

    