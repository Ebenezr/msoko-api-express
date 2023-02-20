import { Product } from "./product.model";

export interface productCategory {
  id: number;
  name: string;
  description: string;
  products: Product[];
}
