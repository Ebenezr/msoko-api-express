import { Product } from "@/server/models/product.model";
import { productCategory } from "@/server/models/productCategory.model";

interface ProductState {
  currentProduct: Product;
  products: Product[];
  wishList: Product[];
  addToWishList: (params: Product) => void;
  categories: productCategory[];
  setCurrentProduct: (params: Product) => void;
}
export default ProductState;
