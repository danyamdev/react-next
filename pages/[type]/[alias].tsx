import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';

import { withLayout } from '@/layout';

import { firstLevelMenu } from '@/helpers/helpers';
import { IMenuItem } from '@/interfaces/menu-item.interface';
import { IPageModel, TopLevelCategory } from '@/interfaces/page.interface';
import { IProductModel } from '@/interfaces/product.interface';

const Course: React.FC<ICourseProps> = ({ products }): JSX.Element => {
  return <div>{products && products.length}</div>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const menuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      { firstCategory: menuItem.id },
    );

    paths = [
      ...paths,
      ...menu.flatMap((m) =>
        m.pages.map((p) => `/${menuItem.route}/${p.alias}`),
      ),
    ];
  }

  return {
    paths,
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

  const firstCategoryItem = firstLevelMenu.find(
    (menuItem) => menuItem.route === params.type,
  );

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<IMenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      { firstCategory: firstCategoryItem.id },
    );

    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }

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
        firstCategory: firstCategoryItem.id,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface ICourseProps extends Record<string, unknown> {
  menu: IMenuItem[];
  page: IPageModel;
  products: IProductModel[];
  firstCategory: TopLevelCategory;
}
