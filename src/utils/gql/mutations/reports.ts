import { gql } from '@apollo/client';
export const CREATE_REPORT = gql`
  mutation CreateReport($data: ReportCreateInput!) {
    createReport(data: $data) {
      id
      title
      description
      status
      createdBy {
        id
        name
      }
      createdAt
    }
  }
`;
export const UPDATE_REPORT = gql`
  mutation UpdateReport($reportId: String!, $data: ReportUpdateInput!) {
    updateReport(where: { id: $reportId }, data: $data) {
      id
      title
      description
      status
      updatedAt
    }
  }
`;
export const DELETE_REPORT = gql`
  mutation DeleteReport($reportId: String!) {
    deleteReport(where: { id: $reportId }) {
      id
    }
  }
`;
