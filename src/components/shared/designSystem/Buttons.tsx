import React, { FC } from 'react';
import classNames from 'classnames';

import { Button } from '~/components/button';
import styles from './desingSystem.module.scss';
import { ButtonColorType } from '~/components/button/types';

import { default as data } from './data.json';
const { buttons } = data;
export const Buttons: FC = () => {
    return (
        <div className={styles.section}>
            <h4>
                <span className="text-primary">03</span> Buttons
            </h4>
            <div className={styles.buttons}>
                {buttons.map(button => (
                    <div className={styles.button}>
                        <Button
                            color={button.color as ButtonColorType}
                            key={button.text}
                        >
                            See Product
                        </Button>
                        <p className={classNames('text-muted', styles.label)}>
                            {button.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
