import create from "zustand";

import CartState from "./types/iProduct";
import useCartStore from "./slices/cartSlice";

const useStore = create<CartState>()((...a) => ({
  ...useCartStore(...a),
}));

export default useStore;
