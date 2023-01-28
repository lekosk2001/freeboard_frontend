import ApolloSetting from '@/src/components/commons/apollo';
import { global } from '@/src/commons/styles/global';
import { css, Global } from '@emotion/react';
import '../public/static/fonts/style.css';
import Layout from '@/src/components/commons/layout';

export default function App({ Component, pageProps }: any) {
  return (
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
  );
}
