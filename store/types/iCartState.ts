import { Product } from "@/server/models/product.model";

interface CartState {
  total: number;
  totalQty: number;
  cartContent: Product[];
  wishList: Product[];
  addToWishList: (params: Product) => void;
  addToCart: (params: Product) => void;
  updateCart: (params: { params: Product; myCart: Product[] }) => void;
  clearCart: () => void;
  removeFromCart: (params: {
    id: number;
    price: number;
    quantity: number;
  }) => void;
}

export default CartState;
