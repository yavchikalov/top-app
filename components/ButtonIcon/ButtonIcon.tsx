import styles from './ButtonIcon.module.css';
import { IButtonIconProps, icons } from './ButtonIcon.props';
import cn from 'classnames';
import React from 'react';

export const ButtonIcon = ({ appearance, icon, className, ...props }: IButtonIconProps): JSX.Element => {
    const IconComp = icons[icon];
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.white]: appearance == 'white',
            })}
            {...props}
        >
            <IconComp />
        </button>
    );
};