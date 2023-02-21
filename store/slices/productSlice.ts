import { StateCreator } from "zustand";
import { Product } from "../types/iCartState";
import ProductState from "../types/iProductState";

const useProdStore: StateCreator<ProductState> = (set, get) => ({
  currentProduct: {
    id: 1,
    name: "",
    description: "",
    price: 0,
    rating: 5,
    image_url: "",
    quantity: 0,
    size: "",
    reviews: [],
    categoryId: 1,
    discountId: 1,
  },
  wishList: [],
  addToWishList: (params: Product) => {
    set((state) => ({
      wishList: [...state.wishList, params],
    }));
  },
  products: [],
  categories: [],
  setCurrentProduct: (params: Product) => {
    set((state) => ({
      currentProduct: params,
    }));
  },
});

export default useProdStore;
