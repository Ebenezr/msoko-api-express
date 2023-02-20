import { ProductReview } from "./productReview.model";

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  rating?: number;
  image_url?: string;
  quantity?: number;
  size: string;
  reviews?: ProductReview[];
  categoryId: number;
  discountId?: number;
}
