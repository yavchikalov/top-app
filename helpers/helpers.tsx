import { ITopLevelCategory } from '../interfaces/page.interface';
import { IFirstLevelMenuItem } from '../interfaces/menu.interface';

import BooksIcon from '../icons/menu/books.svg';
import ServicesIcon from '../icons/menu/services.svg';
import CoursesIcon from '../icons/menu/courses.svg';
import ProductsIcon from '../icons/menu/products.svg';

export const firstLevelMenu: IFirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: ITopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: ITopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: ITopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: ITopLevelCategory.Products },
];


export const priceRu = (price: number): string => {
    return `${price.toLocaleString('ru-RU')} ₽`;
};

export const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};