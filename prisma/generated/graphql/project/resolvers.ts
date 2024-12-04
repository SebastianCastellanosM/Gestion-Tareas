
    import prisma from '@/src/config/prisma';

    const ProjectResolvers = {
    Project: {
        
                customer: async (parent:any, _:any) => {
                return await prisma.customer.findUnique({
                    where: {
                    id: parent.customerId,
                    },
                });
                }
                ,projectItems: async (parent:any, _:any) => {
                  return await prisma.projectItem.findMany({
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
    };

    export { ProjectResolvers };

    