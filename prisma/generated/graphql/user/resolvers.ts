
    import prisma from 'config/prisma';

    const UserResolvers = {
    User: {
        sessions: async (parent:any, _:any) => {
                  return await prisma.session.findMany({
                  where: {
                      user: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                },accounts: async (parent:any, _:any) => {
                  return await prisma.account.findMany({
                  where: {
                      user: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                },projectsAsOwner: async (parent:any, _:any) => {
                  return await prisma.project.findMany({
                  where: {
                      owner: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                },tasksAsAssignee: async (parent:any, _:any) => {
                  return await prisma.task.findMany({
                  where: {
                      assignee: {
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
        users: async () => {
        return await prisma.user.findMany({});
        },
        user: async (_:any, args:any) => {
        return await prisma.user.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createUser:async (_:any, args:any)=>{
        return await prisma.user.create({
          data:{...args.data,  }
        })
      },
      updateUser:async (_:any, args:any)=>{
        return await prisma.user.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteUser:async (_:any, args:any)=>{
        return await prisma.user.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    },

    export { UserResolvers };

    