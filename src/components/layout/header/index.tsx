import { FC, useState } from 'react';

import { Logo } from './Logo';
import { Menu } from '../menu';
import { ToggleShopingCar } from './ToggleShopingCar';

import styles from './header.module.scss';
import { MenuIcon } from '~/components/icons';
import classNames from 'classnames';

export const Header: FC = () => {
    const [isMenuOpen, toggleMenu] = useState(false);

    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <button
                    onClick={() => toggleMenu(!isMenuOpen)}
                    className={classNames(styles['menu-toggle'])}
                >
                    <MenuIcon />
                </button>
                <Menu isOpen={isMenuOpen} />
                <ToggleShopingCar />
            </div>
        </header>
    );
};
