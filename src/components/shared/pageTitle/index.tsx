import { FC } from 'react';
import classNames from 'classnames';

import styles from './PageTitle.module.scss';

interface IPageTitleProps {
    tag?: React.ElementType;
    className?: string;
}

export const PageTitle: FC<IPageTitleProps> = ({
    tag: Tag = 'h1',
    children,
    className
}) => {
    return (
        <Tag className={classNames(className, styles.wrapper)}>{children}</Tag>
    );
};
