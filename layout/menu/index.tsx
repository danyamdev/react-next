import { useContext } from 'react';

import { AppContext } from '@/context/app.context';

import styles from './menu.module.css';

export const Menu = (): JSX.Element => {
  const { menu } = useContext(AppContext);
  return (
    <div>
      {menu.map((m) => (
        <span key={m._id.secondCategory}>{m._id.secondCategory}</span>
      ))}
    </div>
  );
};
