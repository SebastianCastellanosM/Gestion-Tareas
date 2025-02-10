// graphql/schema.ts
import { makeExecutableSchema } from '@graphql-tools/schema';
import { customResolvers } from './custom/resolvers';
import { customTypes } from './custom/types';

// Aquí puedes incluir más resolvers y tipos personalizados, como por ejemplo los de "users"
const typeDefs = `
  type Query {
    hello: String
  }

  # Aquí puedes agregar los tipos generales que utilizas en tus queries, mutations, etc.
  ${customTypes}  // Agregar tipos de resolvers personalizados
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
  Mutation: {
    ...customResolvers,  // Importar resolvers personalizados
  },
};

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});