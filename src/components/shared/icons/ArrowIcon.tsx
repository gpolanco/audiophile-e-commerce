import { FC } from 'react';
import { IconColorMap, IIconProps } from './types';

export const ArrowIcon: FC<IIconProps> = ({ className, color }) => {
    return (
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
            />
        </svg>
    );
};
