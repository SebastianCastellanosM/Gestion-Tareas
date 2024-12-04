
  import {gql} from 'apollo-server-micro'

  const ProjectTypes = gql`
  type Project{
    id: ID!,name: String!,ownerId: Int!,owner: User!,tasks: [Task]
  }

  type Query{
    projects:[Project]
    project(id:String!):Project
  }

  input ProjectCreateInput{
    name: String!,ownerId: Int!
  }

  input ProjectWhereUniqueInput{
    id:String!
  }

  input ProjectUpdateInput{
  name: StringInput
ownerId: IntInput
  }

  type Mutation {
  createProject(data:ProjectCreateInput):Project

  updateProject(where:ProjectWhereUniqueInput!, data:ProjectUpdateInput ):Project

  deleteProject(where: ProjectWhereUniqueInput!):Project

    }
  `
  export {ProjectTypes}
    