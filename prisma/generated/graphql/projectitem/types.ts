
  import {gql} from 'apollo-server-micro'

  const ProjectItemTypes = gql`
  type ProjectItem{
    id: ID!,project: Project!,projectId: String!,task: Tasks!,taskId: String!,createdAt: DateTime!,updatedAt: DateTime!
  }

  type Query{
    projectItems:[ProjectItem]
    projectItem(id:String!):ProjectItem
  }

  input ProjectItemCreateInput{
    projectId: String!,taskId: String!
  }

  input ProjectItemWhereUniqueInput{
    id:String!
  }

  input ProjectItemUpdateInput{
  projectId: StringInput
taskId: StringInput
  }

  type Mutation {
  createProjectItem(data:ProjectItemCreateInput):ProjectItem

  updateProjectItem(where:ProjectItemWhereUniqueInput!, data:ProjectItemUpdateInput ):ProjectItem

  deleteProjectItem(where: ProjectItemWhereUniqueInput!):ProjectItem

    }
  `
  export {ProjectItemTypes}
    