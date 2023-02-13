import { useProductsStore } from "./slices/productSlice";

const useMainStore = create((set, get) => ({
  cart: [],
  addToCart: (product) => set({ cart: [...get().cart, product] }),
  products: useProductsStore((state) => state.products),
}));
