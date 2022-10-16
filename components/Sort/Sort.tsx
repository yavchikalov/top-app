import { SortEnum, ISortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from '../../icons/sort/sort.svg';
import cn from 'classnames';

export const Sort = ({ sort, setSort, className, ...props }: ISortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <div className={styles.sortName} id="sort">Сортировка</div>
            <button
                id="rating"
                className={cn({
                    [styles.active]: sort == SortEnum.Rating
                })}
                aria-selected={sort == SortEnum.Rating}
                aria-labelledby="sort rating"
                onClick={() => setSort(SortEnum.Rating)}
            >
                <SortIcon className={styles.sortIcon} />По рейтингу
            </button>
            <button
                id="price"
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price
                })}
                aria-selected={sort == SortEnum.Price}
                aria-labelledby="sort price"
            >
                <SortIcon className={styles.sortIcon} />По цене
            </button>
        </div>
    );
};