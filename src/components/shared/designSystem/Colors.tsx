import React, { FC } from 'react';
import styles from './desingSystem.module.scss';

import { default as data } from './data.json';

const { colors } = data;
export const Colors: FC = () => {
    return (
        <div className={styles.section}>
            <h4>
                <span className="text-primary">01</span> Colors
            </h4>
            <div className={styles.colors}>
                {colors.map(color => (
                    <div key={color.hex} className={styles.color}>
                        <div
                            className={styles['color-swatch']}
                            style={{ backgroundColor: `${color.hex}` }}
                        />
                        <ul className={styles['color-codes']}>
                            <li className={styles['color-code']}>
                                <span>HEX</span>
                                <strong>{color.hex}</strong>
                            </li>
                            <li className={styles['color-code']}>
                                <span>RGB</span>
                                <strong>{color.rgb}</strong>
                            </li>
                            <li className={styles['color-code']}>
                                <span>HSL</span>
                                <strong>{color.hsl}</strong>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
