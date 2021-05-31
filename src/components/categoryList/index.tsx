import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ArrowIcon } from '~/components/shared';

import styles from './CategoryList.module.scss';

interface ICategoryListProps {}

export const CategoryList: FC<ICategoryListProps> = ({ children }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <Link href="/headphone">
                    <a className={styles.link}>
                        <figure className={styles.image}>
                            <Image
                                alt="Mountains"
                                src="/images/category-headphones.png"
                                layout="fixed"
                                objectFit="cover"
                                width={122}
                                height={160}
                                quality={100}
                            />
                        </figure>
                        <div className={styles['inner-content']}>
                            <h3 className={styles.title}>Headphones</h3>
                            <p>
                                Shop
                                <ArrowIcon />
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
            <div className={styles.wrapper}>
                <Link href="/headphone">
                    <a className={styles.link}>
                        <figure className={styles.image}>
                            <Image
                                alt="Mountains"
                                src="/images/category-speakers.png"
                                layout="fixed"
                                objectFit="cover"
                                width={122}
                                height={160}
                                quality={100}
                            />
                        </figure>
                        <div className={styles['inner-content']}>
                            <h3 className={styles.title}>Headphones</h3>
                            <p>
                                Shop
                                <ArrowIcon />
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
            <div className={styles.wrapper}>
                <Link href="/headphone">
                    <a className={styles.link}>
                        <figure className={styles.image}>
                            <Image
                                alt="Mountains"
                                src="/images/category-earphones.png"
                                layout="fixed"
                                objectFit="cover"
                                width={122}
                                height={160}
                                quality={100}
                            />
                        </figure>
                        <div className={styles['inner-content']}>
                            <h3 className={styles.title}>Headphones</h3>
                            <p>
                                Shop
                                <ArrowIcon />
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    );
};
