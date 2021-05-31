import { FC } from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';
import { ButtonColorType } from './types';
import { ArrowIcon } from '../icons';
import { PlusIcon } from '../icons/PlusIcon';

interface IButtonProps {
    color?: ButtonColorType;
    className?: string;
    isBlock?: boolean;
}

export const Button: FC<IButtonProps> = ({
    color = 'primary',
    className,
    children,
    isBlock
}) => {
    return (
        <button
            className={classNames(styles.button, className, {
                [styles.primary]: color === 'primary',
                [styles['primary-invert']]: color === 'primary-invert',
                [styles.secondary]: color === 'secondary',
                [styles['secondary-invert']]: color === 'secondary-invert',
                [styles.tertiary]: color === 'tertiary',
                [styles['tertiary-invert']]: color === 'tertiary-invert',
                [styles.isBlock]: isBlock
            })}
        >
            {children}
            <ArrowIcon className={styles.icon} />
        </button>
    );
};
