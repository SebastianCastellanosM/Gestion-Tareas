
      import { AccountResolvers } from './account/resolvers';
import { SessionResolvers } from './session/resolvers';
import { UserResolvers } from './users/resolvers';
import { CustomerResolvers } from './customer/resolvers';
import { ProjectResolvers } from './project/resolvers';
import { ProjectItemResolvers } from './projectitem/resolvers';
import { TasksResolvers } from './tasks/resolvers';
import { VerificationTokenResolvers } from './verificationtoken/resolvers';
  
      export const resolvers = [AccountResolvers, SessionResolvers, UserResolvers, CustomerResolvers, ProjectResolvers, ProjectItemResolvers, TasksResolvers, VerificationTokenResolvers];
  
      