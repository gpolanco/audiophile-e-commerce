import React, { FC } from 'react';
import { IconColorMap, IIconProps } from './types';

export const ArrowIcon: FC<IIconProps> = ({ className, color }) => {
    return (
        <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M1.32178 1L6.32178 6L1.32178 11"
                stroke={IconColorMap[color]}
                strokeWidth="2"
            />
        </svg>
    );
};
