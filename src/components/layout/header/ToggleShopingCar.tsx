import { FC } from 'react';
import { ShoppingCarIcon } from '~/components/shared/icons';

import styles from './header.module.scss';

export const ToggleShopingCar: FC = () => {
    return (
        <button className={styles['toggle-shoping-car']}>
            <ShoppingCarIcon color="white" />
        </button>
    );
};
