import classNames from 'classnames';
import { FC, useEffect, useRef } from 'react';
import styles from './menu.module.scss';

interface IMenuProps {
    isOpen?: boolean;
}

export const Menu: FC<IMenuProps> = ({ isOpen }) => {
    return (
        <nav
            className={classNames(styles.wrapper, {
                [styles.isOpen]: isOpen
            })}
        >
            <ul className={styles['list']}>
                <li className={styles['item']}>
                    <a className={styles['link']} href="">
                        Home
                    </a>
                </li>
                <li className={styles['item']}>
                    <a className={styles['link']} href="">
                        Headphones
                    </a>
                </li>
                <li className={styles['item']}>
                    <a className={styles['link']} href="">
                        Speakers
                    </a>
                </li>
                <li className={styles['item']}>
                    <a className={styles['link']} href="">
                        Earphones
                    </a>
                </li>
            </ul>
        </nav>
    );
};
