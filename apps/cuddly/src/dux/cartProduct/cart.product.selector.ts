import { createSelector } from "reselect";
import { AppState } from "../rootReducer";
import { CartProductState } from "./cart.product.reducer";

const getCartState = (state: AppState) => state.cartProductState;

export const getCartProducts = createSelector(
  getCartState,
  (cartState: CartProductState) => cartState.products
);
