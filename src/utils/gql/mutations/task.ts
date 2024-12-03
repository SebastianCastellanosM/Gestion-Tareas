import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation CreateTask($data: TaskCreateInput!) {
    createTask(data: $data) {
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
    }
  }
`;
export const UPDATE_TASK = gql`
  mutation UpdateTask($taskId: String!, $data: TaskUpdateInput!) {
    updateTask(where: { id: $taskId }, data: $data) {
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
    }
  }
`;
export const DELETE_TASK = gql`
  mutation DeleteTask($taskId: String!) {
    deleteTask(where: { id: $taskId }) {
      id
    }
  }
`;
