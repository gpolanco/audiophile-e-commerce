import React, { FC } from 'react';

import styles from './desingSystem.module.scss';
import { default as data } from './data.json';
const { typography } = data;

const Heading: FC<{ element: string }> = ({ element, children }) => {
    const Tag: React.ElementType = element as React.ElementType;
    return <Tag className="mt-0">{children}</Tag>;
};

export const Typography: FC = () => {
    return (
        <div className={styles.section}>
            <h4>
                <span className="text-primary">02</span> typography
            </h4>

            <div className={styles.typography__header}>
                <div className={styles.typography__title}>
                    {typography.name}
                </div>
                <div className={styles.typography__characters}>
                    {typography.characters}
                </div>
            </div>

            {typography.headings.map(heading => (
                <>
                    <p className="text-muted mb-2">{heading.settings}</p>
                    <Heading element={heading.tag}>{heading.text}</Heading>
                </>
            ))}
        </div>
    );
};
