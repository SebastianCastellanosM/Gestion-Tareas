
      import { SessionResolvers } from './session/resolvers';
import { AccountResolvers } from './account/resolvers';
import { ProjectResolvers } from './project/resolvers';
import { TaskResolvers } from './task/resolvers';
import { UserResolvers } from './user/resolvers';
import { VerificationTokenResolvers } from './verificationtoken/resolvers';
  
      export const resolvers = [SessionResolvers, AccountResolvers, ProjectResolvers, TaskResolvers, UserResolvers, VerificationTokenResolvers];
  
      