import { Product } from "@/type";
export interface productCategory {
  id: number;
  name: string;
  description: string;
  products: Product[];
}
