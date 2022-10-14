import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { IFirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.css';

import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map((m) => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const buildFirstLevel = (): JSX.Element => {
        return (
            <>
                {firstLevelMenu.map((item) => (
                    <div key={item.route}>
                        <Link
                            href={item.route}
                        >
                            <a>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: item.id === firstCategory
                                })}>
                                    {item.icon}
                                    <span>
                                        {item.name}
                                    </span>
                                </div>
                            </a>
                        </Link>
                        {item.id === firstCategory && buildSecondLevel(item)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: IFirstLevelMenuItem): JSX.Element => {
        return (
            <div className={styles.secondBlock}>
                {menu.map((item) => {
                    if (item.pages.map((page) => page.alias).includes(router.asPath.split('/')[2])) {
                        item.isOpened = true;
                    }
                    return (
                        <div
                            key={item._id.secondCategory}
                        >
                            <div
                                className={styles.secondLevel}
                                onClick={() => openSecondLevel(item._id.secondCategory)}
                            >
                                {item._id.secondCategory}
                            </div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: item.isOpened
                            })}>
                                {buildThirdLevel(item.pages, menuItem.route)}
                            </div>
                        </div>
                    );
                })}
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
                        [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
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