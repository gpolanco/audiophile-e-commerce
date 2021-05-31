import classNames from 'classnames';
import React, { FC } from 'react';
import { Button } from '../shared';

interface IFeaturedProductProps {}

import styles from './FeaturedProduct.module.scss';

export const FeaturedProduct: FC<IFeaturedProductProps> = ({ children }) => {
    return (
        <div className={styles.warapper}>
            <div className={classNames(styles.inner)}>
                <div className={styles.content}>
                    <span className="overline text-muted">NEW PRODUCT</span>
                    <h1 className={classNames('text-white', styles.title)}>
                        XX99 Mark II Headphones
                    </h1>
                    <p className={classNames('text-muted', styles.description)}>
                        Experience natural, lifelike audio and exceptional build
                        quality made for the passionate music enthusiast.
                    </p>
                    <Button>See Product</Button>
                </div>
            </div>
        </div>
    );
};
