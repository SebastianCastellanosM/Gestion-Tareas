import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';

// Definimos la URL de la API en las variables de entorno.
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:3000/api/graphql';

declare global {
  var apolloGlobal: ApolloClient<object>;
}

let client: ApolloClient<object>;

if (process.env.NODE_ENV === 'production') {
  client = new ApolloClient({
    cache: new InMemoryCache({
      addTypename: false, 
    }),
    link: from([
      new HttpLink({
        uri: GRAPHQL_URL, 
      }),
    ]),
    connectToDevTools: true,
  });
} else {
  if (!global.apolloGlobal) {
    global.apolloGlobal = new ApolloClient({
      cache: new InMemoryCache(),
      link: from([
        new HttpLink({
          uri: GRAPHQL_URL, 
        }),
      ]),
      connectToDevTools: true,
    });
  }
  client = global.apolloGlobal;
}

export { client };