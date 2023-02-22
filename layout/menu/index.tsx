import { useContext } from 'react';
import cn from 'classnames';

import CoursesIcon from '@/layout/menu/icons/courses.svg';
import ServicesIcon from '@/layout/menu/icons/services.svg';
import BooksIcon from '@/layout/menu/icons/books.svg';
import ProductsIcon from '@/layout/menu/icons/products.svg';

import { AppContext } from '@/context/app.context';
import { IFirstLevelMenuItem, IPage } from '@/interfaces/menu-item.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';

import styles from './menu.module.css';

const firstLevelMenu: IFirstLevelMenuItem[] = [
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

export const Menu = (): JSX.Element => {
  const { menu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = (): JSX.Element => (
    <>
      {firstLevelMenu.map((menu: IFirstLevelMenuItem) => (
        <div key={menu.route}>
          <a href={`/${menu.route}`}>
            <div
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menu.id === firstCategory,
              })}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </div>
          </a>
          {menu.id === firstCategory && buildSecondLevel(menu)}
        </div>
      ))}
    </>
  );

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem): JSX.Element => (
    <div className={styles.secondBlock}>
      {menu.map((m) => (
        <div key={m._id.secondCategory}>
          <div className={styles.secondLevel}>{m._id.secondCategory}</div>
          <div
            className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened,
            })}
          >
            {buildThirdLevel(menuItem.route, m.pages)}
          </div>
        </div>
      ))}
    </div>
  );

  const buildThirdLevel = (route: string, pages: IPage[]): JSX.Element => (
    <>
      {pages.map((page: IPage) => (
        <a
          href={`/${route}/${page.alias}`}
          className={cn(styles.thirdLevel, { [styles.thirdLevelActive]: false })}
        >
          {page.category}
        </a>
      ))}
    </>
  );

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
