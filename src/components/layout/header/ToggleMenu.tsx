import React, { FC } from 'react';

import styles from './header.module.scss';

export const ToggleMenu: FC = ({ children }) => {
    return (
        <button className={styles['menu-toggle']}>
            <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="16" height="3" fill="white" />
                <rect y="6" width="16" height="3" fill="white" />
                <rect y="12" width="16" height="3" fill="white" />
            </svg>
        </button>
    );
};
