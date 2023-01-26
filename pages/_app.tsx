import { global } from '@/styles/global'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { css,Global } from '@emotion/react'
import { AppProps} from 'next/app'
import "../public/static/fonts/style.css"

export default function App({ Component, pageProps }: any){

  const client = new ApolloClient({
    uri:'http://backendonline.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Global styles={css`${global}`} />
      <Component {...pageProps} />
    </ApolloProvider>)
}
