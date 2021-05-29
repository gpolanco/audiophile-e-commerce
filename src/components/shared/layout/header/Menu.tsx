import { FC } from 'react';
import styles from './header.module.scss';

export const Menu: FC = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles['menu-list']}>
                <li className={styles['menu-item']}>
                    <a className={styles['menu-link']} href="">
                        Home
                    </a>
                </li>
                <li className={styles['menu-item']}>
                    <a className={styles['menu-link']} href="">
                        Headphones
                    </a>
                </li>
                <li className={styles['menu-item']}>
                    <a className={styles['menu-link']} href="">
                        Speakers
                    </a>
                </li>
                <li className={styles['menu-item']}>
                    <a className={styles['menu-link']} href="">
                        Earphones
                    </a>
                </li>
            </ul>
        </nav>
    );
};
