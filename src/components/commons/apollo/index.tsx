import React, { useEffect } from 'react';
import { ApolloLink, ApolloClient, ApolloProvider, InMemoryCache, fromPromise } from '@apollo/client';
import {
	createUploadLink
} from 'apollo-upload-client'
import { onError } from '@apollo/client/link/error'
import { useRecoilState } from 'recoil';
import { accessTokenState } from '@/src/commons/store';
import { getAccessToken } from '../getAccessToken/getAccessToken';

interface Props { children: JSX.Element; }

const GLOBAL_STATE = new InMemoryCache()

const ApolloSetting = (props: Props) => {

	const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

	useEffect(() => {
		void getAccessToken().then((newAccessToken) => {
			setAccessToken(newAccessToken)
		})
	}, [])

	const errorLink = onError(({ graphQLErrors, operation, forward }) => {
		if (graphQLErrors) {
			for (const err of graphQLErrors) {
				if (err.extensions.code === "UNAUTHENTICATED") {
					return fromPromise(
						getAccessToken().then((newAccessToken) => {
							setAccessToken(newAccessToken)
							if (typeof newAccessToken !== "string") return;
							operation.setContext({
								headers: {
									...operation.getContext().headers,
									Authorization: `Bearer ${newAccessToken}`
								},
							});
						})
					).flatMap(() => forward(operation));
				}
			}
		}
	})

	const uplodLink = createUploadLink({
		uri: "https://backendonline.codebootcamp.co.kr/graphql",
		headers: { Authorization: `Bearer ${accessToken}` },
		credentials: 'include'
	})

	const client = new ApolloClient({
		link: ApolloLink.from([errorLink, uplodLink as unknown as ApolloLink]),
		cache: GLOBAL_STATE,
		connectToDevTools: true
	});

	return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
