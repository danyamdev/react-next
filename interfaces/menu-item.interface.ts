import { TopLevelCategory } from "@/interfaces/page.interface";

interface IId {
  secondCategory: string;
}

export interface IPage {
  _id: string;
  title: string;
  alias: string;
  category: string;
}

export interface IMenuItem {
  _id: IId;
  isOpened?: boolean;
  pages: IPage[];
}

export interface IFirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
}