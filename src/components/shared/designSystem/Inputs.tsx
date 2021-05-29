import { FC, useState } from 'react';
import { Input } from '~/components/input';
import { SpinnerNumber } from '~/components/input/SpinnerNumber';
import { InputSpinnerNumber } from '~/components/inputNumber';

import styles from './desingSystem.module.scss';

interface IInputsProps {}

export const Inputs: FC<IInputsProps> = ({ children }) => {
    const [radioValue, sertRadioValue] = useState('radio1');
    return (
        <div className={styles.section}>
            <h4>
                <span className="text-primary">04</span> FORM ELEMENTS
            </h4>
            <div className={styles['inpuits-container']}>
                <div className={styles['buttons-column']}>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Insert your name"
                        label="Name"
                    />
                    <p className="text-muted">Text Field Default</p>

                    <Input
                        name="name1"
                        type="text"
                        placeholder="Insert your name"
                        label="Name"
                        value="Alexei"
                        className="active"
                    />
                    <p className="text-muted">Text Field Active</p>

                    <Input
                        className="active"
                        label="Name"
                        name="name2"
                        placeholder="Insert your name"
                        type="text"
                        value="Alexei"
                        error="Wrong format"
                    />
                    <p className="text-muted">Text Field Error</p>
                </div>
                <div className={styles['buttons-column']}>
                    <Input
                        name="input-radio"
                        type="radio"
                        placeholder="Insert your name"
                        label="e-money"
                        id="e-money"
                    />
                    <Input
                        name="input-radio"
                        id="e-money1"
                        label="e-money"
                        placeholder="Insert your name"
                        type="radio"
                        value="e-money1"
                    />
                    <Input
                        name="input-radio"
                        type="radio"
                        placeholder="Insert your name"
                        label="e-money"
                        id="e-money2"
                        value="e-money2"
                    />
                </div>
                <div className={styles['buttons-column']}>
                    <InputSpinnerNumber max={3} onChange={console.log} />
                </div>
            </div>
        </div>
    );
};
