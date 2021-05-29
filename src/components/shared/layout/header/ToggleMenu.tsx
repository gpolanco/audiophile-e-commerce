import { FC } from 'react';
import { MenuIcon } from '~/components/icons/MenuIcon';

import styles from './header.module.scss';

export const ToggleMenu: FC = ({ children }) => {
    return (
        <button className={styles['menu-toggle']}>
            <MenuIcon color="white" />
        </button>
    );
};
