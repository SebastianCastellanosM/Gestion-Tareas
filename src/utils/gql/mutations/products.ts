import { gql } from '@apollo/client';

export const UPSERT_PRODUCT = gql`
  mutation UpsertProduct($data: UpsertProductInput) {
    upsertProducts(data: $data) {
      id
      name
      description
      price
    }
  }
`;