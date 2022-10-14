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