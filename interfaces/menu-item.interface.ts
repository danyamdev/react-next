interface IId {
  secondCategory: string;
}

interface IPage {
  _id: string;
  title: string;
  alias: string;
  category: string;
}

export interface IMenuItem {
  _id: IId;
  pages: IPage[];
}
