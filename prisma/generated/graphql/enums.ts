
  import {gql} from 'apollo-server-micro'
  
  const GQLEnums = gql`
    
        enum Role {
  ADMIN
  USER
}
        input RoleInput{
          set:Role
        }
        

        enum TaskStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
}
        input TaskStatusInput{
          set:TaskStatus
        }
        
  `

  export {GQLEnums}
  