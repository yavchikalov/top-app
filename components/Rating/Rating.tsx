import { IRatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { KeyboardEvent, useEffect, useState } from "react";

export const Rating = ({ rating, isEditable = false, setRating, ...props }: IRatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((element: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                >
                    <StarIcon
                        onClick={() => handleClick(i + 1)}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => handleSpace(i + 1, e)}
                        tabIndex={isEditable ? 0 : -1}
                    />
                </span>
            );
        });

        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (isEditable) constructRating(i);
    };

    const handleClick = (i: number) => {
        if (isEditable && setRating) setRating(i);
    };

    const handleSpace = (i: number, event: KeyboardEvent<SVGAElement>) => {
        if (event.code === 'Space' && isEditable && setRating) {
            setRating(i);
        }
    };

    return (
        <div {...props}>
            {ratingArray.map((element: JSX.Element, i: number) => (
                <span key={i}>
                    {element}
                </span>
            ))}
        </div>
    );
};