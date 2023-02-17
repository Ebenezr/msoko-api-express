import { StateCreator } from "zustand";
import CartState from "../types/iCartState";
import { Product } from "@/server/models/product.model";

const useCart: StateCreator<CartState> = (set, get) => ({
  total: 0,
  totalQty: 0,
  cartContent: [],
  wishList: [],
  addToWishList: (params: Product) => {
    set((state) => ({
      wishList: [...state.wishList, params],
    }));
  },
  addToCart: (params: Product) => {
    set((state) => ({
      totalQty: state.totalQty + 1,
      total: state.total + params.price,
      cartContent: [...state.cartContent, params],
    }));
  },
  clearCart: () => set({ totalQty: 0, total: 0, cartContent: [] }),
  removeFromCart: (params) =>
    set((state) => ({
      total: state.total - params.price * params.quantity,
      totalQty: state.totalQty - params.quantity,
      cartContent: state.cartContent.filter((item) => item.id !== params.id),
    })),
  updateCart: ({ params, myCart }) => {
    set((state) => ({
      totalQty: state.totalQty + 1,
      total: state.total + params.price,
      cartContent: myCart,
    }));
  },
});

export default useCart;
