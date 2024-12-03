import { gql } from '@apollo/client';
export const GET_ALL_REPORTS = gql`
  query GetAllReports {
    reports {
      id
      title
      description
      status
      createdBy {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
export const GET_REPORT = gql`
  query GetReport($reportId: String!) {
    report(id: $reportId) {
      id
      title
      description
      status
      createdBy {
        id
        name
      }
      relatedTask {
        id
        title
      }
      relatedProject {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
