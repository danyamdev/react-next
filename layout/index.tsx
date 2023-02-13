import { FunctionComponent } from 'react';

import { Header } from '@/layout/header';
import { Sidebar } from '@/layout/sidebar';
import { Footer } from '@/layout/footer';

import { ILayoutProps } from '@/layout/props';

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <>
    <Header />
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
    <Footer />
  </>
);

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
) => {
  return function (props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
