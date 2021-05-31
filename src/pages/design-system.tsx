import { FC } from 'react';
import {
    PageTitle,
    Inputs,
    IconList,
    Buttons,
    Colors,
    Typography
} from '~/components/shared';

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
