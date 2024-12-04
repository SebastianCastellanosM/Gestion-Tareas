
    import { gql } from 'apollo-server-micro';
    import { AccountTypes } from './account/types';import { SessionTypes } from './session/types';import { UserTypes } from './users/types';import { CustomerTypes } from './customer/types';import { ProjectTypes } from './project/types';import { ProjectItemTypes } from './projectitem/types';import { TasksTypes } from './tasks/types';import { VerificationTokenTypes } from './verificationtoken/types'
    
    ;

    const genericTypes = gql`
    scalar DateTime
    scalar Json
    scalar Bytes
    scalar Decimal
    scalar BigInt
    input StringInput{
      set:String
    }
    input FloatInput{
      set:Float
    }
    input BooleanInput{
      set:Boolean
    }
    input IntInput{
      set:Int
    }
    input DateTimeInput{
      set:DateTime
    }
    input DecimalInput{
      set:Decimal
    }
    `;

    export const types = [genericTypes,  AccountTypes, SessionTypes, UserTypes, CustomerTypes, ProjectTypes, ProjectItemTypes, TasksTypes, VerificationTokenTypes];

  