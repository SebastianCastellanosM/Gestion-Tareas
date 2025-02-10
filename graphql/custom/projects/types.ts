// graphql/custom/projects/types.ts
import { gql } from 'apollo-server-micro';

export const projectTypes = gql`
  type Project {
    id: String
    title: String
    description: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  extend type Query {
    getProject(id: String!): Project
    getProjects: [Project]
  }

  extend type Mutation {
    createProject(title: String!, description: String!): Project
    updateProject(id: String!, title: String, description: String): Project
    deleteProject(id: String!): Project
  }
`;
