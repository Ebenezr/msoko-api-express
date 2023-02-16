import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import useCart from "./slices/cartSlice";
import useProdStore from "./slices/productSlice";
import CartState from "./types/iCartState";
import ProductState from "./types/iProductState";

export const useStore = create<ProductState & CartState>()(
  persist(
    (...a) => ({
      ...useCart(...a),
      ...useProdStore(...a),
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export default useStore;
