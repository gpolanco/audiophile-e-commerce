import { FC } from 'react';
import { IconColorMap, IIconProps } from './types';

export const MenuIcon: FC<IIconProps> = ({ color, className }) => {
    return (
        <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect width="16" height="3" fill={IconColorMap[color]} />
            <rect y="6" width="16" height="3" fill={IconColorMap[color]} />
            <rect y="12" width="16" height="3" fill={IconColorMap[color]} />
        </svg>
    );
};
