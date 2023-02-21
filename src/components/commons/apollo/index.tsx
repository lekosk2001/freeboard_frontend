import React, { useEffect } from 'react';
import { ApolloLink, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {
	createUploadLink
} from 'apollo-upload-client'
import { useRecoilState } from 'recoil';
import { accessTokenState } from '@/src/commons/store';

interface Props {
	children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache()

const ApolloSetting = (props: Props) => {
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			setAccessToken(localStorage.getItem("accessToken") ?? "")
		}
	}, [])

	const uplodLink = createUploadLink({
		uri: "http://backendonline.codebootcamp.co.kr/graphql",
		headers: { Authorization: `Bearer ${accessToken}` }
	})

	const client = new ApolloClient({
		link: ApolloLink.from([uplodLink as unknown as ApolloLink]),
		cache: GLOBAL_STATE,
		connectToDevTools: true
	});

	return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;

