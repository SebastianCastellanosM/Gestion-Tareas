import { gql } from '@apollo/client';
export const GET_ALL_TASKS = gql`
  query GetAllTasks {
    tasks {
      id
      title
      description
      status
      dueDate
      project {
        id
        name
      }
      assignedTo {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_TASK = gql`
  query GetTask($taskId: String!) {
    task(id: $taskId) {
      id
      title
      description
      status
      dueDate
      project {
        id
        name
      }
      assignedTo {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
