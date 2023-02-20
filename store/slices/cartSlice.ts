import { StateCreator } from "zustand";
import CartState, { Product } from "../types/iCartState";

const useCart: StateCreator<CartState> = (set, get) => ({
  total: 0,
  totalQty: 0,
  cartContent: [],
  addToCart: (params: Product) => {
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
  removeFromCart: (params: Product) =>
    set((state) => {
      const itemToRemove = state.cartContent.find(
        (item) => item.id === params.id
      );
      if (!itemToRemove) {
        // Item not found in cart, return the current state
        return state;
      }

      const quantity = itemToRemove.quantity || 0; // <-- use 0 if quantity is undefined
      const price = itemToRemove.price;
      const newCartContent = state.cartContent.filter(
        (item) => item.id !== params.id
      );

      return {
        total: state.total - price * quantity,
        totalQty: state.totalQty - quantity,
        cartContent: newCartContent,
      };
    }),
  updateCart: ({ params, myCart }) => {
    set((state) => ({
      totalQty: state.totalQty + 1,
      total: state.total + params.price,
      cartContent: myCart,
    }));
  },
  addCartQuantity: (params: { id: number }) => {
    set((state) => {
      const updatedCartContent = state.cartContent.map((item) => {
        if (item.id === params.id) {
          const updatedItem = {
            ...item,
            quantity: item.quantity + 1,
          };
          updatedItem.price = updatedItem.price * updatedItem.quantity;
          return updatedItem;
        }
        return item;
      });
      const total = updatedCartContent.reduce(
        (acc, item) => acc + item.price,
        0
      );
      const totalQty = updatedCartContent.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      return {
        ...state,
        cartContent: updatedCartContent,
        total,
        totalQty,
      };
    });
  },
  reduceCartQuantity: (params: { id: number }) => {
    set((state) => {
      const updatedCartContent = state.cartContent.map((item) => {
        if (item.id === params.id) {
          const updatedItem = {
            ...item,
            quantity: item.quantity - 1,
          };
          updatedItem.price = updatedItem.price * updatedItem.quantity;
          return updatedItem;
        }
        return item;
      });
      const total = updatedCartContent.reduce(
        (acc, item) => acc + item.price,
        0
      );
      const totalQty = updatedCartContent.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      return {
        ...state,
        cartContent: updatedCartContent,
        total,
        totalQty,
      };
    });
  },
});

export default useCart;
