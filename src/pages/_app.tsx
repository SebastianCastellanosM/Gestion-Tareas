import '../styles/globals.css'; 
import { SessionProvider } from 'next-auth/react'; 
import type { AppProps } from 'next/app'; 
import Layout from '@/src/components/organism/Layout'; 
import { ApolloProvider } from '@apollo/client'; 
import { client } from '@/graphql/client'; 
import { Toaster } from '@/src/components/ui/toaster'; 
import Footer  from '@/src/components/molecules/Footer'; 

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
          <Footer />
        </Layout>
        <Toaster />
      </SessionProvider>
    </ApolloProvider>
  );
}
