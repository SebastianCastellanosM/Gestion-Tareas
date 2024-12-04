
  import {gql} from 'apollo-server-micro'

  const SessionTypes = gql`
  type Session{
    id: ID!,userId: Int!,expiresAt: DateTime!,user: User!
  }

  type Query{
    sessions:[Session]
    session(id:String!):Session
  }

  input SessionCreateInput{
    userId: Int!,expiresAt: DateTime!
  }

  input SessionWhereUniqueInput{
    id:String!
  }

  input SessionUpdateInput{
  userId: IntInput
expiresAt: DateTimeInput
  }

  type Mutation {
  createSession(data:SessionCreateInput):Session

  updateSession(where:SessionWhereUniqueInput!, data:SessionUpdateInput ):Session

  deleteSession(where: SessionWhereUniqueInput!):Session

    }
  `
  export {SessionTypes}
    