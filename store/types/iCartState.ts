// import { Product } from "@/server/models/product.model";

import { ProductReview } from "@/type";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  rating?: number;
  image_url?: string;
  size: string;
  reviews?: ProductReview[];
  categoryId: number;
  discountId?: number;
}
interface CartState {
  total: number;
  totalQty: number;
  cartContent: Product[];
  addToCart: (params: Product) => void;
  updateCart: (params: { params: Product; myCart: Product[] }) => void;
  reduceCartQuantity: (params: { id: number }) => void;
  clearCart: () => void;
  removeFromCart: (params: Product) => void;
  getTotals: () => void;
}

export default CartState;
