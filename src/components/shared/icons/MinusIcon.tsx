import { FC } from 'react';
import { IconColorMap, IIconProps } from './types';

export const MinusIcon: FC<IIconProps> = ({ color, className }) => {
    return (
        <svg
            width="8"
            height="4"
            viewBox="0 0 5 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M0.550508 1.516V0.2875H4.45051V1.516H0.550508Z"
                fill={IconColorMap[color]}
            />
        </svg>
    );
};
