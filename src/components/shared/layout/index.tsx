import Head from 'next/head';
import { FC } from 'react';
import { Footer } from './footer';
import { Header } from './header';

import styles from './layout.module.scss';

interface ILayoutProps {}

export const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="../../assets/favicon-32x32.png"
                ></link>
                <title>Frontend Mentor | Audiophile e-commerce website</title>
            </Head>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};
