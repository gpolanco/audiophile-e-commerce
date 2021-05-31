import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon
} from '~/components/shared/icons';
import { Logo } from '../header/Logo';

import styles from './Footer.module.scss';

export const Footer: FC = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames('container', styles.container)}>
                <div className={styles['footer-line']} />
                <div className={styles['inner-content']}>
                    <div className={styles.top}>
                        <div className={styles.logo}>
                            <Link href="/">
                                <a>
                                    <Logo />
                                </a>
                            </Link>
                        </div>
                        <ul className={styles.menu}>
                            <li className={styles['menu-item']}>
                                <a className={styles['menu-link']} href="/">
                                    Home
                                </a>
                            </li>
                            <li className={styles['menu-item']}>
                                <a className={styles['menu-link']} href="/">
                                    HEADPHONES
                                </a>
                            </li>
                            <li className={styles['menu-item']}>
                                <a className={styles['menu-link']} href="/">
                                    SPEAKERS
                                </a>
                            </li>
                            <li className={styles['menu-item']}>
                                <a className={styles['menu-link']} href="/">
                                    EARPHONES
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className={classNames('text-muted', styles.description)}>
                        Audiophile is an all in one stop to fulfill your audio
                        needs. We're a small team of music lovers and sound
                        specialists who are devoted to helping you get the most
                        out of personal audio. Come and visit our demo facility
                        - we’re open 7 days a week.
                    </p>
                    <div className={styles.bottom}>
                        <p
                            className={classNames(
                                'text-muted',
                                styles.paragraph
                            )}
                        >
                            Copyright 2021. All Rights Reserved
                        </p>
                        <div className={styles['social-icons']}>
                            <Link href="/">
                                <a>
                                    <FacebookIcon />
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    <TwitterIcon />
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    <InstagramIcon />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
