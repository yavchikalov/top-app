import { ICardProps } from "./Card.props";
import cn from "classnames";
import styles from "./Card.module.css";

export const Card = ({ color = 'white', children, className, ...props }: ICardProps) => {
    return (
        <div
            className={cn(styles.card, className, {
                [styles.blue]: color == 'blue'
            })}
            {...props}
        >
            {children}
        </div>
    );
};