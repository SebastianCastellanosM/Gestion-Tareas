
    import prisma from '@/src/config/prisma';

    const CustomerResolvers = {
    Customer: {
        projects: async (parent:any, _:any) => {
                  return await prisma.project.findMany({
                  where: {
                      customer: {
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
        customers: async () => {
        return await prisma.customer.findMany({});
        },
        customer: async (_:any, args:any) => {
        return await prisma.customer.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createCustomer:async (_:any, args:any)=>{
        return await prisma.customer.create({
          data:{...args.data,  }
        })
      },
      updateCustomer:async (_:any, args:any)=>{
        return await prisma.customer.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteCustomer:async (_:any, args:any)=>{
        return await prisma.customer.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { CustomerResolvers };

    