import { ProductReview } from "./productReview.model";

export interface Product {
  id: number;
  name: string;
  description?: string | null | undefined;
  price: number;
  rating?: number | null | undefined;
  image_url?: string;
  quantity?: number;
  size: string;
  reviews?: ProductReview[] | null | undefined;
  categoryId: number;
  discountId?: number | null | undefined;
}
