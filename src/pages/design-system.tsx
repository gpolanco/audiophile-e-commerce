import { FC } from 'react';
import { Buttons, Colors, Typography } from '~/components/shared/designSystem';
import { PageTitle } from '~/components/shared/pageTitle';

const DesignSystem: FC = () => {
    return (
        <>
            <PageTitle>Design system</PageTitle>
            <div className="design-system container">
                <Colors />
                <Typography />
                <Buttons />
            </div>
        </>
    );
};

export default DesignSystem;
