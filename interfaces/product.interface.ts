interface IProductCharacteristic {
  value: string;
  name: string;
}

interface IReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface IProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
 oldPrice: number;
 description: string;
  characteristic: IProductCharacteristic[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: string;
  initialRating: number;
  reviews: IReviewModel[];
  reviewCount: number;
  reviewAvg?: number;
  advantages: string;

}