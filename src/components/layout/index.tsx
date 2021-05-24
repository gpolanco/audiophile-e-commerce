import Head from 'next/head';
import React, { FC } from 'react';

import styles from './layout.module.css';

interface ILayoutProps {}

export const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="../../assets/favicon-32x32.png"
                ></link>
                <title>Frontend Mentor | Audiophile e-commerce website</title>
            </Head>
            <header className={styles.header}>HEADER</header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>FOOOTER</footer>
        </div>
    );
};
