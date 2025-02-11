import { ApolloServer, gql } from "apollo-server-micro";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

const typeDefs = gql`
  type Project {
    id: ID!
    name: String!
    description: String!
  }
  type Query {
    getProjects: [Project]
  }
  type Mutation {
    createProject(name: String!, description: String!): Project
    deleteProject(id: ID!): Boolean
    updateProject(id: ID!, name: String!, description: String!): Project
  }
`;

const resolvers = {
  Query: {
    getProjects: async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) throw new Error(error.message);
      return data;
    },
  },
  Mutation: {
    createProject: async (_: any, { name, description }: any) => {
      const { data, error } = await supabase
        .from("projects")
        .insert([{ name, description }])
        .select()
        .single();
      if (error) throw new Error(error.message);
      return data;
    },
    deleteProject: async (_: any, { id }: any) => {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw new Error(error.message);
      return true;
    },
    updateProject: async (_: any, { id, name, description }: any) => {
      const { data, error } = await supabase
        .from("projects")
        .update({ name, description })
        .eq("id", id)
        .select()
        .single();
      if (error) throw new Error(error.message);
      return data;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server.createHandler({ path: "/api/graphql" });