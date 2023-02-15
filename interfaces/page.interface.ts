export enum TopLevelCategory  {
  Courses,
  Services,
  Books,
  Products
}
interface IPageAdvantage {
  _id:string;
  title: string;
  description: string;
}

interface IHhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updateAt: Date;
}

export interface IPageModel {
  tags: string[];
  _id: string;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: IPageAdvantage [];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hh: IHhData;
}