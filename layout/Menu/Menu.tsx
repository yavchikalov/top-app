import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { IFirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';
import { ITopLevelCategory } from '../../interfaces/page.interface';
import styles from './Menu.module.css';
import BooksIcon from './icons/books.svg';
import ServicesIcon from './icons/services.svg';
import CoursesIcon from './icons/courses.svg';
import ProductsIcon from './icons/products.svg';
import cn from 'classnames';
import Link from 'next/link';

const firstLevelMenu: IFirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: ITopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: ITopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: ITopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: ITopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = (): JSX.Element => {
        return (
            <>
                {firstLevelMenu.map((item) => (
                    <div key={item.route}>
                        <a href={item.route}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: item.id === firstCategory
                            })}>
                                {item.icon}
                                <span>
                                    {item.name}
                                </span>
                            </div>
                        </a>
                        {item.id === firstCategory && buildSecondLevel(item)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: IFirstLevelMenuItem): JSX.Element => {
        return (
            <div className={styles.secondBlock}>
                {menu.map((item) => (
                    <div
                        key={item._id.secondCategory}
                    >
                        <div className={styles.secondLevel}>
                            {item._id.secondCategory}
                        </div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBLockOpened]: item.isOpened
                        })}>
                            {buildThirdLevel(item.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: IPageItem[], route: string): JSX.Element[] => {
        return (
            pages.map((page) => (
                <Link
                    key={page._id}
                    href={`/${route}/${page.alias}`}
                >
                    <a className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: false
                    })}>
                        {page.category}
                    </a>
                </Link>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};