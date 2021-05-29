import React, {
    FC,
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState
} from 'react';
import classNames from 'classnames';

import { MinusIcon, PlusIcon } from '../icons';
import styles from './InputSpinnerNumber.module.scss';

type IInputSpinnerNumberProps = InputHTMLAttributes<HTMLInputElement> & {
    onChange?: (value: number) => void;
};

export const InputSpinnerNumber: FC<IInputSpinnerNumberProps> = ({
    min = 0,
    max,
    value = 0,
    onChange,
    name,
    className
}) => {
    const [inputValue, setInputValue] = useState<number>(Number(value));
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (onChange) {
            onChange(inputValue);
        }
    }, [inputValue]);

    const handleAddNumber = () => {
        if (inputValue < max) {
            setInputValue(inputValue + 1);
        }
    };

    const handleRemoveNumber = () => {
        if (inputValue > min) {
            setInputValue(inputValue - 1);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={handleRemoveNumber}>
                <MinusIcon className={styles.icon} />
            </button>
            <input
                className={classNames(styles.input, className)}
                max={max}
                min={min}
                name={name}
                onChange={handleInputChange}
                type="number"
                value={inputValue}
                ref={inputRef}
            />
            <button className={styles.button} onClick={handleAddNumber}>
                <PlusIcon className={styles.icon} />
            </button>
        </div>
    );
};
