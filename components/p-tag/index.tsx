import cn from 'classnames';

import { IPTagProps } from '@/components/p-tag/props';

import styles from '@/components/p-tag/p-tag.module.css';

export const PTag = ({
  size = 'l',
  className,
  children,
  ...props
}: IPTagProps): JSX.Element => (
  <p className={cn(styles.default, className, styles[size])} {...props}>
    {children}
  </p>
);
