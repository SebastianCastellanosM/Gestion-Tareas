
  import {gql} from 'apollo-server-micro'

  const ProjectTypes = gql`
  type Project{
    id: ID!,customer: Customer!,customerId: String!,total: Float!,createdAt: DateTime!,updatedAt: DateTime!,projectItems: [ProjectItem]
  }

  type Query{
    projects:[Project]
    project(id:String!):Project
  }

  input ProjectCreateInput{
    customerId: String!,total: Float!
  }

  input ProjectWhereUniqueInput{
    id:String!
  }

  input ProjectUpdateInput{
  customerId: StringInput
total: FloatInput
  }

  type Mutation {
  createProject(data:ProjectCreateInput):Project

  updateProject(where:ProjectWhereUniqueInput!, data:ProjectUpdateInput ):Project

  deleteProject(where: ProjectWhereUniqueInput!):Project

    }
  `
  export {ProjectTypes}
    