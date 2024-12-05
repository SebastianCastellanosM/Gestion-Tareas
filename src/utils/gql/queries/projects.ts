import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projects {
      id
      name
      description
      createdAt
      updatedAt
      tasks {
        id
        title
      }
    }
  }
`;
export const GET_PROJECT = gql`
  query GetProject($projectId: String!) {
    project(id: $projectId) {
      id
      name
      description
      createdAt
      updatedAt
      tasks {
        id
        title
      }
    }
  }
`;
