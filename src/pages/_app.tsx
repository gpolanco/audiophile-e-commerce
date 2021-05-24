import { FC } from 'react';
import { AppProps } from 'next/app';

import { Layout } from '~/components/layout';
import '~/styles/app.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
