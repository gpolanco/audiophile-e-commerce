import React, { FC } from 'react';

interface IParagraphProps {}

export const Paragraph: FC<IParagraphProps> = ({ children }) => {
    return <div className="Paragraph">Paragraph component</div>;
};
