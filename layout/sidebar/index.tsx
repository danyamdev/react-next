import { Menu } from '@/layout/menu';

import { ISidebarProps } from '@/layout/sidebar/props';

export const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => (
  <div {...props}>
    <Menu />
  </div>
);
