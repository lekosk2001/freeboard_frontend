import ApolloSetting from '@/src/components/commons/apollo';
import { global } from '@/src/commons/styles/global';
import { css, Global } from '@emotion/react';
import '../public/static/fonts/style.css';
import Layout from '@/src/components/commons/layout';
import { RecoilRoot } from 'recoil';
import { type AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {


	return (
		<RecoilRoot>
			<ApolloSetting>
				<>
					<Global
						styles={css`
						${global}
					`}
					/>

					<Layout>
						<Component {...pageProps} />
					</Layout>
				</>
			</ApolloSetting>
		</RecoilRoot>
	);
}
