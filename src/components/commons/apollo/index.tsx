import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

interface Props {
  children: JSX.Element;
}

const ApolloSetting = (props: Props) => {
  const client = new ApolloClient({
    uri: 'http://backendonline.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
