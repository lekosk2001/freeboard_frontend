import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri:'http://backendonline.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>)
}
