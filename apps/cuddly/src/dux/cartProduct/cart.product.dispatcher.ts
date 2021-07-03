/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch } from "redux";
import { CartProduct } from "../../common/business-model/cartProducts";
import { Product } from "../../common/business-model/product";
import {
  AddCartProductActions,
  RemoveCartProductAction,
} from "./cart.product.action";

export const addCartProduct = (product: Product, quantity: number) => {
  const cartProduct: CartProduct = {
    ...product,
    itemQuantity: quantity,
  };
  return new AddCartProductActions(cartProduct);
};

export const removeCartProduct = (cartProduct: CartProduct, id: number) => (
  dispatch: Dispatch
) => {
  dispatch(new RemoveCartProductAction(cartProduct, id));
};
