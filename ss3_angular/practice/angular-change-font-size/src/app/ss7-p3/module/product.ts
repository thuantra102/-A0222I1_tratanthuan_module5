// tslint:disable-next-line:no-empty-interface
import {Category} from './category';

export interface Product {
  id?: number;
  name: string;
  price?: number;
  description?: string;
  category?: Category;
}
