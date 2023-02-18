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
  updateCartQuantity: (productId: number, newQuantity: number) => {
    set((state) => {
      // Find the product in the cart
      const productIndex = state.cartContent.findIndex(
        (product) => product.id === productId
      );
      if (productIndex === -1) {
        // Product not found in cart, return the current state
        return state;
      }

      // Get the current quantity of the product
      const currentQuantity = state.cartContent[productIndex].quantity || 0;

      // Calculate the change in quantity
      const quantityChange = newQuantity - currentQuantity;

      // Calculate the new total price and quantity
      const price = state.cartContent[productIndex].price;
      const totalQty = state.totalQty + quantityChange;
      const total = state.total + price * quantityChange;

      if (newQuantity <= 0) {
        // Remove the product from the cart if the new quantity is 0 or less
        const newCartContent = state.cartContent.filter(
          (product) => product.id !== productId
        );
        return {
          ...state,
          totalQty,
          total,
          cartContent: newCartContent,
        };
      } else {
        // Update the quantity of the product
        const updatedProduct = {
          ...state.cartContent[productIndex],
          quantity: newQuantity,
        };
        const updatedCartContent = [...state.cartContent];
        updatedCartContent[productIndex] = updatedProduct;
        return {
          ...state,
          totalQty,
          total,
          cartContent: updatedCartContent,
        };
      }
    });
  },
});

export default useCart;
