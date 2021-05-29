import { FC } from 'react';
import { Buttons, Colors, Typography } from '~/components/shared/designSystem';
import { IconList } from '~/components/shared/designSystem/IconList';
import { Inputs } from '~/components/shared/designSystem/Inputs';
import { PageTitle } from '~/components/shared/pageTitle';

const DesignSystem: FC = () => {
    return (
        <>
            <PageTitle>Design system</PageTitle>
            <div className="design-system container">
                <Colors />
                <Typography />
                <Buttons />
                <Inputs />
                <IconList />
            </div>
        </>
    );
};

export default DesignSystem;
