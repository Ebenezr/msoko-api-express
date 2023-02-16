import { Product } from "@/server/models/product.model";
import { productCategory } from "@/server/models/productCategory.model";

interface ProductState {
  currentProduct: Product;
  products: Product[];
  categories: productCategory[];
  setCurrentProduct: (params: Product) => void;
}
export default ProductState;
