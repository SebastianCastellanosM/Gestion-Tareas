// graphql/custom/projects/types.ts
import { gql } from 'apollo-server-micro';

export const projectTypes = gql`
  type Project {
    id: ID!
    name: String
    description: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  extend type Query {
    getProject(id: String!): Project
    getProjects: [Project]
  }

  extend type Mutation {
    createProject(name: String!, description: String!): Project
    updateProject(id: String!, name: String, description: String): Project
    deleteProject(id: String!): Project
  }
`;
