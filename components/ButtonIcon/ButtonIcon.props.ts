import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from './icons/up.svg';
import close from './icons/close.svg';
import menu from './icons/menu.svg';

export const icons = {
    up,
    close,
    menu
};

export type IconName = keyof typeof icons;

export interface IButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance: 'primary' | 'white';
}