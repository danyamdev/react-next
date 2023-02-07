import cn from 'classnames';

import { ITagProps } from '@/components/tag/props';

import styles from '@/components/tag/tag.module.css';

export const Tag = ({
  size = 's',
  color = 'ghost',
  href,
  className,
  children,
  ...props
}: ITagProps): JSX.Element => (
  <div
    className={cn(styles.tag, className, styles[color], styles[size])}
    {...props}
  >
    {href ? <a href={href}>{children}</a> : <>{children}</>}
  </div>
);
