
  import {gql} from 'apollo-server-micro'

  const AccountTypes = gql`
  type Account{
    id: ID!,provider: String!,providerAccountId: String!,userId: Int!,user: User!
  }

  type Query{
    accounts:[Account]
    account(id:String!):Account
  }

  input AccountCreateInput{
    provider: String!,providerAccountId: String!,userId: Int!
  }

  input AccountWhereUniqueInput{
    id:String!
  }

  input AccountUpdateInput{
  provider: StringInput
providerAccountId: StringInput
userId: IntInput
  }

  type Mutation {
  createAccount(data:AccountCreateInput):Account

  updateAccount(where:AccountWhereUniqueInput!, data:AccountUpdateInput ):Account

  deleteAccount(where: AccountWhereUniqueInput!):Account

    }
  `
  export {AccountTypes}
    