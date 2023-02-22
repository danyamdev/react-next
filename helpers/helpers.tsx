import CoursesIcon from '@/layout/menu/icons/courses.svg';
import ServicesIcon from '@/layout/menu/icons/services.svg';
import BooksIcon from '@/layout/menu/icons/books.svg';
import ProductsIcon from '@/layout/menu/icons/products.svg';

import { TopLevelCategory } from '@/interfaces/page.interface';
import { IFirstLevelMenuItem } from '@/interfaces/menu-item.interface';

export const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];
