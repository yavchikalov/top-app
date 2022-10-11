import { ReactNode } from "react";

export const enum HTags {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3'
}

export interface IHtagProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode
};