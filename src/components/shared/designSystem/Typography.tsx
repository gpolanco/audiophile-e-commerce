import React, { FC } from 'react';

import styles from './desingSystem.module.scss';

export const Typography: FC = () => {
    return (
        <div className={styles.section}>
            <h4>
                <span className="text-primary">02</span> typography
            </h4>

            <p className="text-muted mb-2">
                H1 - Manrope Bold - 56px (All Caps, 58px Line Space, 2px Char.
                Space)
            </p>
            <h1 className="mt-0">Morbi interdum mollis sapien</h1>

            <p className="text-muted mb-2">
                H2 - Manrope Bold - 40px (All Caps, 44px Line Space, 1,5px Char.
                Space)
            </p>
            <h2 className="mt-0">Donec nec justo eget felis facilisis</h2>

            <p className="text-muted mb-2">
                H3 - Manrope Bold - 32px (All Caps, 36px Line Space, 1,15px
                Char. Space)
            </p>
            <h3 className="mt-0">Nunc sem lacus accum</h3>

            <p className="text-muted mb-2">
                H4 - Manrope Bold - 28px (All Caps, 38px Line Space, 2px Char.
                Space)
            </p>
            <h4 className="mt-0">interdum consectetuer</h4>

            <p className="text-muted mb-2">
                H5 - Manrope Bold - 24px (All Caps, 33px Line Space, 1,7px Char.
                Space)
            </p>
            <h5 className="mt-0">nascetur ridiculus mus</h5>

            <p className="text-muted mb-2">
                H6 - Manrope Bold - 18px (All Caps, 24px Line Space, 1,3px Char.
                Space)
            </p>
            <h6 className="mt-0">natoque penatibus et</h6>
        </div>
    );
};
