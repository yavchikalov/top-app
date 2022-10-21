import { ICardProps } from "./Card.props";
import cn from "classnames";
import styles from "./Card.module.css";
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(({ color = 'white', children, className, ...props }: ICardProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div
            className={cn(styles.card, className, {
                [styles.blue]: color == 'blue'
            })}
            ref={ref}
            {...props}
        >
            {children}
        </div>
    );
});