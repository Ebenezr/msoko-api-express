import create from "zustand";

import CartState from "./types/iProduct";
import useProductsStore from "./slices/productSlice";

const useStore = create<CartState>()((...a) => ({
  ...useProductsStore(...a),
}));

export default useStore;
