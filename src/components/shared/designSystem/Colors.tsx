import React, { FC } from 'react';
import { colors as colorList } from './data.json';

import styles from './desingSystem.module.scss';

export const Colors: FC = () => {
    return (
        <>
            <h4>
                <span className="text-primary">01</span> Colors
            </h4>
            <div className={styles.colors}>
                {colorList.map(color => (
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
        </>
    );
};
