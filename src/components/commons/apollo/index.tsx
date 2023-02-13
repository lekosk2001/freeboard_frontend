import React, { useState } from 'react';
import { ApolloLink, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {
	createUploadLink
} from 'apollo-upload-client'

interface Props {
	children: JSX.Element;
}

const ApolloSetting = (props: Props) => {

	const [accessToken] = useState('')

	const uplodLink = createUploadLink({
		uri: "http://backendonline.codebootcamp.co.kr/graphql",
		headers: { Authorization: `Bearer ${accessToken}` }
	})

	const client = new ApolloClient({
		link: ApolloLink.from([uplodLink as unknown as ApolloLink]),
		cache: new InMemoryCache(),
	});

	return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;

