import { global } from '@/styles/global'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { css,Global } from '@emotion/react'
import "../public/static/fonts/style.css"

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri:'http://backendonline.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
        <Global
          styles={css`
            ${global}
          `}
        />
      <Component {...pageProps} />
    </ApolloProvider>)
}
