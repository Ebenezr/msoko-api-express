import { StateCreator, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/server/models/product.model";
import ProductState from "../types/iProductState";

const useProdStore: StateCreator<ProductState> = (set, get) => ({
  products: [],
  categories: [],
});

export default useProdStore;
