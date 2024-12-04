
    import prisma from 'config/prisma';

    const ProjectResolvers = {
    Project: {
        
                owner: async (parent:any, _:any) => {
                return await prisma.user.findUnique({
                    where: {
                    id: parent.ownerId,
                    },
                });
                }
                ,tasks: async (parent:any, _:any) => {
                  return await prisma.task.findMany({
                  where: {
                      project: {
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
        projects: async () => {
        return await prisma.project.findMany({});
        },
        project: async (_:any, args:any) => {
        return await prisma.project.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createProject:async (_:any, args:any)=>{
        return await prisma.project.create({
          data:{...args.data,  }
        })
      },
      updateProject:async (_:any, args:any)=>{
        return await prisma.project.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteProject:async (_:any, args:any)=>{
        return await prisma.project.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    },

    export { ProjectResolvers };

    