import { IPtag } from "./Ptag.props";
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ children, size = 'm', className, ...props }: IPtag): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.l]: size === 'l'
            })}
            {...props}
        >
            {children}
        </p>
    );
};