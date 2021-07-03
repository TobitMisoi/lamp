import { Action } from "redux";
import { CartProduct } from "../../common/business-model/cartProducts";

export enum CartProductActionTypes {
  ADD_PRODUCT = "[CART_PRODUCT] Add",
  REMOVE_PRODUCT = "[REMOVE_PRODUCT] Remove",
}

export class AddCartProductActions implements Action {
  public readonly type!: CartProductActionTypes.ADD_PRODUCT;
  constructor(public product: CartProduct) {}
}

export class RemoveCartProductAction implements Action {
  public readonly type!: CartProductActionTypes.REMOVE_PRODUCT;
  constructor(public product: CartProduct, public id: number) {}
}

export type CartProductAction = AddCartProductActions | RemoveCartProductAction;
