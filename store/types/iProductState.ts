import { Product } from "@/server/models/product.model";
import { productCategory } from "@/server/models/productCategory.model";

interface ProductState {
  products: Product[];
  categories: productCategory[];
}
export default ProductState;
