// graphql/custom/users/types.ts
import { gql } from 'apollo-server-micro';

export const userTypes = gql`
  type User {
    id: String
    name: String
    email: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Query {
    getUser(id: String!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: String!, name: String, email: String): User
    deleteUser(id: String!): User
  }
`;