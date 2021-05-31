import { FC } from 'react';
import { IconColorMap, IIconProps } from './types';

export const PlusIcon: FC<IIconProps> = ({ color, className }) => {
    return (
        <svg
            width="8"
            height="8"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M2.89362 6.258V3.931H0.566621V2.7025H2.89362V0.382H4.12212V2.7025H6.43612V3.931H4.12212V6.258H2.89362Z"
                fill={IconColorMap[color]}
            />
        </svg>
    );
};
