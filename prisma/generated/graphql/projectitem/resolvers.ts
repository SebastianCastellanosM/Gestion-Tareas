
    import prisma from '@/src/config/prisma';

    const ProjectItemResolvers = {
    ProjectItem: {
        
                project: async (parent:any, _:any) => {
                return await prisma.project.findUnique({
                    where: {
                    id: parent.projectId,
                    },
                });
                }
                ,
                task: async (parent:any, _:any) => {
                return await prisma.tasks.findUnique({
                    where: {
                    id: parent.taskId,
                    },
                });
                }
                
    },
    Query: {
        projectItems: async () => {
        return await prisma.projectItem.findMany({});
        },
        projectItem: async (_:any, args:any) => {
        return await prisma.projectItem.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createProjectItem:async (_:any, args:any)=>{
        return await prisma.projectItem.create({
          data:{...args.data,  }
        })
      },
      updateProjectItem:async (_:any, args:any)=>{
        return await prisma.projectItem.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteProjectItem:async (_:any, args:any)=>{
        return await prisma.projectItem.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { ProjectItemResolvers };

    