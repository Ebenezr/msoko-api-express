import { StateCreator } from "zustand";
import CartState from "../types/iCartState";

const useCart: StateCreator<CartState> = (set, get) => ({
  total: 0,
  totalQty: 0,
  cartContent: [],
  addToCart: (params: any) => {
    set((state) => {
      // Check if the product is already in the cart
      const existingProductIndex = state.cartContent.findIndex(
        (product) => product.id === params.id
      );

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, increase its quantity
        const updatedCartContent = [...state.cartContent];
        updatedCartContent[existingProductIndex].quantity! += 1; // <-- non-null assertion operator
        return {
          ...state,
          totalQty: state.totalQty + 1,
          total: state.total + params.price,
          cartContent: updatedCartContent,
        };
      } else {
        // If the product is not in the cart, add it as a new item
        return {
          ...state,
          totalQty: state.totalQty + 1,
          total: state.total + params.price,
          cartContent: [...state.cartContent, { ...params, quantity: 1 }],
        };
      }
    });
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
