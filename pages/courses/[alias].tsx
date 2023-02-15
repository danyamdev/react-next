import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';

import { withLayout } from '@/layout';

import { IMenuItem } from '@/interfaces/menu-item.interface';
import { IPageModel } from '@/interfaces/page.interface';
import { IProductModel } from '@/interfaces/product.interface';

const firstCategory = 0;

const Course: React.FC<ICourseProps> = ({ products }): JSX.Element => {
  return <div>{products && products.length}</div>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<IMenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory },
  );

  return {
    paths: menu.flatMap((m) => m.pages.map((p) => `/courses/${p.alias}`)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<IMenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory },
  );

  const { data: page } = await axios.get<IPageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + `/api/top-page/byAlias/${params.alias}`,
  );

  const { data: products } = await axios.post<IProductModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + `/api/product/find`,
    {
      category: page.category,
      limit: 10,
    },
  );

  return {
    props: {
      menu,
      page,
      products,
      firstCategory,
    },
  };
};

interface ICourseProps extends Record<string, unknown> {
  menu: IMenuItem[];
  page: IPageModel;
  products: IProductModel[];
  firstCategory: number;
}
