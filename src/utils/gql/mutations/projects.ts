import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation CreateProject($data: ProjectCreateInput!) {
    createProject(data: $data) {
      id
      name
      description
    }
  }
`;
export const UPDATE_PROJECT = gql`
  mutation UpdateProject($projectId: String!, $data: ProjectUpdateInput!) {
    updateProject(where: { id: $projectId }, data: $data) {
      id
      name
      description
    }
  }
`;
export const DELETE_PROJECT = gql`
  mutation DeleteProject($projectId: String!) {
    deleteProject(where: { id: $projectId }) {
      id
    }
  }
`;
