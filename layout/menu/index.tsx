import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { firstLevelMenu } from '@/helpers/helpers';
import { AppContext } from '@/context/app.context';
import { IFirstLevelMenuItem, IPage } from '@/interfaces/menu-item.interface';

import styles from './menu.module.css';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    const newMenu = menu.map((m) => ({
      ...m,
      isOpened: m._id.secondCategory === secondCategory,
    }));

    setMenu && setMenu(newMenu);
  };

  const buildFirstLevel = (): JSX.Element => (
    <>
      {firstLevelMenu.map((menu: IFirstLevelMenuItem) => (
        <div key={menu.route}>
          <Link href={`/${menu.route}`}>
            <div
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menu.id === firstCategory,
              })}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </div>
          </Link>
          {menu.id === firstCategory && buildSecondLevel(menu)}
        </div>
      ))}
    </>
  );

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem): JSX.Element => (
    <div className={styles.secondBlock}>
      {menu.map((m) => {
        if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
          m.isOpened = true;
        }

        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(menuItem.route, m.pages)}
            </div>
          </div>
        );
      })}
    </div>
  );

  const buildThirdLevel = (route: string, pages: IPage[]): JSX.Element => (
    <>
      {pages.map((page: IPage) => (
        <Link
          key={`/${route}/${page.alias}`}
          href={`/${route}/${page.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]:
              `/${route}/${page.alias}` === router.asPath,
          })}
        >
          {page.category}
        </Link>
      ))}
    </>
  );

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
