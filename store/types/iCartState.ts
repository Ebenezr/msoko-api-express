// import { Product } from "@/server/models/product.model";

import { ProductReview } from "@/server/models/productReview.model";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
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
  addCartQuantity: (productId: number) => void;
  reduceCartQuantity: (productId: number) => void;
  clearCart: () => void;
  removeFromCart: (params: Product) => void;
}

export default CartState;
