
  import {gql} from 'apollo-server-micro'

  const TaskTypes = gql`
  type Task{
    id: ID!,title: String!,assigneeId: Int,assignee: User,projectId: Int,project: Project
  }

  type Query{
    tasks:[Task]
    task(id:String!):Task
  }

  input TaskCreateInput{
    title: String!,assigneeId: Int,projectId: Int
  }

  input TaskWhereUniqueInput{
    id:String!
  }

  input TaskUpdateInput{
  title: StringInput
assigneeId: IntInput
projectId: IntInput
  }

  type Mutation {
  createTask(data:TaskCreateInput):Task

  updateTask(where:TaskWhereUniqueInput!, data:TaskUpdateInput ):Task

  deleteTask(where: TaskWhereUniqueInput!):Task

    }
  `
  export {TaskTypes}
    