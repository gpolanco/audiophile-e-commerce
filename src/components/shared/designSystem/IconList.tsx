import { SyntheticEvent, FC, useState } from 'react';
import {
    ArrowIcon,
    FacebookIcon,
    InstagramIcon,
    MenuIcon,
    MinusIcon,
    PlusIcon,
    ShoppingCarIcon,
    TwitterIcon
} from '~/components/icons';
import { IconColorMap, IconColorType } from '~/components/icons/types';

import styles from './desingSystem.module.scss';

interface IIconListProps {}

export const IconList: FC<IIconListProps> = ({ children }) => {
    const [iconColor, setIconColor] = useState<IconColorType>('dark');

    const handleSetIconColor = (event: SyntheticEvent<HTMLSelectElement>) => {
        const { currentTarget } = event;
        setIconColor(currentTarget.value as IconColorType);
    };

    return (
        <div className={styles.section}>
            <h4>
                <span className="text-primary">05</span> ICONS
            </h4>

            <div className="form mb-3">
                <select name="color" onChange={handleSetIconColor}>
                    {Object.keys(IconColorMap).map(key => (
                        <option value={key}>{key}</option>
                    ))}
                </select>
            </div>
            <div className={styles.icons}>
                <div className={styles['icon-container']}>
                    <ArrowIcon color={iconColor} />
                </div>
                <div className={styles['icon-container']}>
                    <MenuIcon color={iconColor} />
                </div>
                <div className={styles['icon-container']}>
                    <PlusIcon color={iconColor} />
                </div>
                <div className={styles['icon-container']}>
                    <MinusIcon color={iconColor} />
                </div>
                <div className={styles['icon-container']}>
                    <ShoppingCarIcon color={iconColor} />
                </div>
                <div className={styles['icon-container']}>
                    <TwitterIcon color={iconColor} />
                </div>
                <div className={styles['icon-container']}>
                    <FacebookIcon color={iconColor} />
                </div>
                <div className={styles['icon-container']}>
                    <InstagramIcon color={iconColor} />
                </div>
            </div>
        </div>
    );
};
