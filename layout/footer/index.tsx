import cn from 'classnames';

import { IFooterProps } from '@/layout/footer/props';

import styles from './footer.module.css';

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => (
  <div {...props} className={cn(className, styles.footer)}>
    <div>OwlTop © 2020 - 2021 Все права защищены</div>
    <a href="#" target="_blank">
      Пользовательское соглашение
    </a>
    <a href="#" target="_blank">
      Политика конфиденциальности
    </a>
  </div>
);
