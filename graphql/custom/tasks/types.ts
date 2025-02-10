// graphql/custom/tasks/types.ts
import { gql } from 'apollo-server-micro';

export const taskTypes = gql`
  type Task {
    id: String
    title: String
    description: String
    projectId: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  extend type Query {
    getTask(id: String!): Task
    getTasks: [Task]
  }

  extend type Mutation {
    createTask(title: String!, description: String!, projectId: String!): Task
    updateTask(id: String!, title: String, description: String): Task
    deleteTask(id: String!): Task
  }
`;