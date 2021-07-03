import { Product } from "../../common/business-model/product";
import { ProductFetchedAction } from "./product.actions";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setProducts = (products: Product[]) => {
  return new ProductFetchedAction(products);
};
