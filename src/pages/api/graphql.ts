import { ApolloServer } from 'apollo-server-micro';
import { schema } from '@/graphql/schema';
import Cors from 'micro-cors';

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS', 'GET', 'HEAD'],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({
  schema,
});

const startServer = server.start();

export default cors(async (req, res) => {
  await startServer;
  return server.createHandler({
    path: '/api/graphql',
  })(req, res);
});
