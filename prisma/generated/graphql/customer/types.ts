
  import {gql} from 'apollo-server-micro'

  const CustomerTypes = gql`
  type Customer{
    id: ID!,document: String!,name: String!,email: String!,phone: String!,address: String!,createdAt: DateTime!,updatedAt: DateTime!,projects: [Project]
  }

  type Query{
    customers:[Customer]
    customer(id:String!):Customer
  }

  input CustomerCreateInput{
    document: String!,name: String!,email: String!,phone: String!,address: String!
  }

  input CustomerWhereUniqueInput{
    id:String!
  }

  input CustomerUpdateInput{
  document: StringInput
name: StringInput
email: StringInput
phone: StringInput
address: StringInput
  }

  type Mutation {
  createCustomer(data:CustomerCreateInput):Customer

  updateCustomer(where:CustomerWhereUniqueInput!, data:CustomerUpdateInput ):Customer

  deleteCustomer(where: CustomerWhereUniqueInput!):Customer

    }
  `
  export {CustomerTypes}
    