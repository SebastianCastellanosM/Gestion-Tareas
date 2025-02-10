import { userResolvers } from './users/resolvers';
import { projectResolvers } from './projects/resolvers';
import { taskResolvers } from './tasks/resolvers'; 

export const customResolvers = {
  ...userResolvers,
  ...projectResolvers,
  ...taskResolvers, 
};
