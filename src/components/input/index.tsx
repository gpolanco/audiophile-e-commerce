import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
}

export const Input: FC<IInputProps> = ({
    error,
    name,
    label,
    placeholder,
    type = 'text',
    value,
    id,
    ...props
}) => {
    return (
        <div
            className={classNames(styles['form-group'], {
                [styles['radio-group']]: type === 'radio',
                [styles['is-invalid']]: !!error
            })}
        >
            <input
                {...props}
                className={styles.input}
                name={name}
                placeholder={placeholder}
                type={type}
                id={id}
            />
            {label && (
                <label className={styles.label} htmlFor={id}>
                    <div>
                        <span className={styles.mark} />
                    </div>
                    <span className={styles['label-text']}>{label}</span>
                    {error && <span className={styles.error}>{error}</span>}
                </label>
            )}
        </div>
    );
};
