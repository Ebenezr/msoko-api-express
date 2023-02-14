import { Product } from "@/server/models/product.model";
import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";


interface CartState {
  total: number;
  totalqty: number;
  cartContent: Product[];
  addTocart: (params: Product) => void;
  updatecart: (params: { params: Product, mycart: Product[] }) => void;
  clearCart: () => void;
  removeFromCart: (params: { id: number, price: number, quantity: number }) => void;
}

const useCart: StateCreator<CartState> = persist(
    (set, get) => ({
      total: 0,
      totalqty: 0,
      cartContent: [],
      addTocart: (params) => {
        set((state) => ({
          totalqty: state.totalqty + 1,
          total: state.total + parseFloat(params.price),
          cartContent: [...state.cartContent, params],
        }));
      },
      updatecart: ({ params, mycart }) => {
        set((state) => ({
          totalqty: state.totalqty + 1,
          total: state.total + parseFloat(params.price),
          cartContent: mycart,
        }));
      },
      clearCart: () => set({ totalqty:0 total: 0, cartContent: [] }),
      removeFromCart: (params) =>
        set((state) => ({
          total: state.total - params.price * params.quantity,
          totalqty: state.totalqty - params.quantity,
          cartContent: state.cartContent.filter(
            (item) => item.id !== params.id
          ),
        })),
    }),
    { name: 'cart' }
  )
);
export default useCart;
