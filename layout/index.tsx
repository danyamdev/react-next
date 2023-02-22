import { FunctionComponent } from 'react';

import { Header } from '@/layout/header';
import { Sidebar } from '@/layout/sidebar';
import { Footer } from '@/layout/footer';

import { ILayoutProps } from '@/layout/props';
import { AppContextProvider, IAppContext } from '@/context/app.context';

import styles from './layout.module.css';

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <div className={styles.wrapper}>
    <Header className={styles.header} />
    <Sidebar className={styles.sidebar} />
    <div className={styles.body}>{children}</div>
    <Footer className={styles.footer} />
  </div>
);

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>,
) => {
  return function (props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
