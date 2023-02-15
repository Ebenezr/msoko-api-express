import { StateCreator, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/server/models/product.model";

export const useProdStore = create(
  persist((set, get) => ({}), {
    name: "product-storage", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage),
  })
);
