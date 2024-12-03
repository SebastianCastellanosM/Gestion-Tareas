import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query Query {
    productss {
      id
      name
      description
      price
      image
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query Products($productsId: String!) {
    products(id: $productsId) {
      id
      name
      description
      price
      image
      createdAt
      updatedAt
    }
  }
`;