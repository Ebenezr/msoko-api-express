import { productCategory } from "@/type";
import { Product } from "./iCartState";

interface ProductState {
  currentProduct: Product;
  products: Product[];
  wishList: Product[];
  addToWishList: (params: Product) => void;
  categories: productCategory[];
  setCurrentProduct: (params: Product) => void;
}
export default ProductState;
