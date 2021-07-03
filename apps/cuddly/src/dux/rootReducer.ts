import { combineReducers, Reducer } from "redux";
import {
  cartProductReducer,
  CartProductState,
} from "./cartProduct/cart.product.reducer";
import { filterReducer, FilterState } from "./filter/filter.reducer";
import { productReducer, ProductState } from "./product/product.reducer";
import { sortReducer, SortState } from "./sort/sort.reducer";

export interface AppState {
  cartProductState: CartProductState;
  productState: ProductState;
  filterState: FilterState;
  sortState: SortState;
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
  cartProductState: cartProductReducer,
  productState: productReducer,
  filterState: filterReducer,
  sortState: sortReducer,
});
