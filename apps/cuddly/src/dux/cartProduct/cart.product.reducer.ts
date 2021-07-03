import { CartProduct } from "../../common/business-model/cartProducts";
import { Dictionary } from "../../common/models/dictionary";
import {
  AddCartProductActions,
  CartProductAction,
  CartProductActionTypes,
  RemoveCartProductAction,
} from "./cart.product.action";

export interface CartProductState {
  products: Dictionary<CartProduct>;
}

const initialState: CartProductState = {
  products: {},
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const cartProductReducer = (
  state: CartProductState = initialState,
  action: CartProductAction
): CartProductState => {
  switch (action.type) {
    // Add item
    case CartProductActionTypes.ADD_PRODUCT: {
      const product = (action as AddCartProductActions).product;

      if (state.products[product.sku.toString()]) {
        product.itemQuantity +=
          state.products[product.sku.toString()].itemQuantity;
      }

      return {
        ...state,
        products: {
          ...state.products,
          [product.sku.toString()]: product,
        },
      };
    }

    // Remove Item
    case CartProductActionTypes.REMOVE_PRODUCT: {
      const id = (action as RemoveCartProductAction).id;
      const products = { ...state.products };
      delete products[id];

      return {
        ...state,
        products,
      };
    }

    default:
      return state;
  }
};
