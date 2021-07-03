import { Product } from "../../common/business-model/product";
import { ProductActions, ProductActionType } from "./product.actions";

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function productReducer(
  state: ProductState = initialState,
  action: ProductActions
) {
  switch (action.type) {
    case ProductActionType.PRODUCT_FETCHED:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
}
