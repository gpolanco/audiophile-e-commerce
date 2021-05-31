export const IconColorMap = {
    gray: '#f1f1f1',
    dark: '#101010',
    white: '#ffffff',
    primary: '#d87d4a',
    danger: '#cd2c2c',
    'gray-dark': '#787878'
};
export type IconColorType = keyof typeof IconColorMap;
export interface IIconProps {
    color?: IconColorType;
    className?: string;
}
