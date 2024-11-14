
      import { AccountResolvers } from './account/resolvers';
import { SessionResolvers } from './session/resolvers';
import { UserResolvers } from './user/resolvers';
import { ProductsResolvers } from './products/resolvers';
import { VerificationTokenResolvers } from './verificationtoken/resolvers';
  
      export const resolvers = [AccountResolvers, SessionResolvers, UserResolvers, ProductsResolvers, VerificationTokenResolvers];
  
      