
  import {gql} from 'apollo-server-micro'

  const TasksTypes = gql`
  type Tasks{
    id: ID!,name: String!,description: String!,createdAt: DateTime!,updatedAt: DateTime!,assigneeId: String,assignee: User,projectItems: [ProjectItem]
  }

  type Query{
    taskss:[Tasks]
    tasks(id:String!):Tasks
  }

  input TasksCreateInput{
    name: String!,description: String!,assigneeId: String
  }

  input TasksWhereUniqueInput{
    id:String!
  }

  input TasksUpdateInput{
  name: StringInput
description: StringInput
assigneeId: StringInput
  }

  type Mutation {
  createTasks(data:TasksCreateInput):Tasks

  updateTasks(where:TasksWhereUniqueInput!, data:TasksUpdateInput ):Tasks

  deleteTasks(where: TasksWhereUniqueInput!):Tasks

    }
  `
  export {TasksTypes}
    