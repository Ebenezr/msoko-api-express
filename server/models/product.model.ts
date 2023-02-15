import { ProductReview } from "./productReview.model";

export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  rating: number | null;
  image_url?: string;
  size: string;
  reviews: ProductReview[] | null;
  categoryId: number;
  discountId?: number | null;
}
