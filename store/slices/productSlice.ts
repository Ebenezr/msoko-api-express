import { persist } from "zustand/middleware";
import { StateCreator } from "zustand";
import CartState from "../types/iProduct";
import { Product } from "@/server/models/product.model";

const useCart: StateCreator<CartState> = (set, get) => ({
  total: 0,
  totalQty: 0,
  cartContent: [],
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

// persist(
//     (set, get) => ({
//       total: 0,
//       totalqty: 0,
//       cartContent: [],
//       addTocart: (params) => {
//         set((state) => ({
//           totalqty: state.totalqty + 1,
//           total: state.total + parseFloat(params.price),
//           cartContent: [...state.cartContent, params],
//         }));
//       },
//       updatecart: ({ params, mycart }) => {
//         set((state) => ({
//           totalqty: state.totalqty + 1,
//           total: state.total + parseFloat(params.price),
//           cartContent: mycart,
//         }));
//       },
//       clearCart: () => set({ totalqty:0 total: 0, cartContent: [] }),
//       removeFromCart: (params) =>
//         set((state) => ({
//           total: state.total - params.price * params.quantity,
//           totalqty: state.totalqty - params.quantity,
//           cartContent: state.cartContent.filter(
//             (item) => item.id !== params.id
//           ),
//         })),
//     }),
//     { name: 'cart' }
//   )
// );
export default useCart;
