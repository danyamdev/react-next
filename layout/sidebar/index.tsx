import cn from 'classnames';

import { Menu } from '@/layout/menu';
import Logo from '@/layout/logo.svg';

import { ISidebarProps } from '@/layout/sidebar/props';

import styles from '@/layout/sidebar/sidebar.module.css';

export const Sidebar = ({
  className,
  ...props
}: ISidebarProps): JSX.Element => (
  <div className={cn(className, styles.sidebar)} {...props}>
    <Logo className={styles.logo} />
    <div>Поиск</div>
    <Menu />
  </div>
);
