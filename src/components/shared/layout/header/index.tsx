import { FC } from 'react';

import { Logo } from './Logo';
import { Menu } from './Menu';
import { ToggleMenu } from './ToggleMenu';
import { ToggleShopingCar } from './ToggleShopingCar';

import styles from './header.module.scss';

export const Header: FC = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <ToggleMenu />
                <Logo />
                <ToggleShopingCar />
                <Menu />
            </div>
        </header>
    );
};
