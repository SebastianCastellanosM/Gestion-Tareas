
  import {gql} from 'apollo-server-micro'

  const UserTypes = gql`
  type User{
    id: ID!,email: String!,password: String!,sessions: [Session],accounts: [Account],projectsAsOwner: [Project],tasksAsAssignee: [Task]
  }

  type Query{
    users:[User]
    user(id:String!):User
  }

  input UserCreateInput{
    email: String!,password: String!
  }

  input UserWhereUniqueInput{
    id:String!
  }

  input UserUpdateInput{
  email: StringInput
password: StringInput
  }

  type Mutation {
  createUser(data:UserCreateInput):User

  updateUser(where:UserWhereUniqueInput!, data:UserUpdateInput ):User

  deleteUser(where: UserWhereUniqueInput!):User

    }
  `
  export {UserTypes}
    