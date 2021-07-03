/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppState } from "../rootReducer";
import { createSelector } from "reselect";
import { ProductState } from "./product.reducer";
import { getSortBy } from "../sort/sort.selector";
import SortService from "../../common/services/sort.service";
import { getFilteredSize } from "../filter/filter.selector";

const getProductState = (state: AppState) => state.productState;

export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => state.products
);

export const getFilteredProducts = createSelector(
  getProducts,
  (state: AppState) => new Set(getFilteredSize(state)),
  (products, filters) => {
    return (products = products.filter((value) => {
      // tslint:disable-next-line: forin
      for (const index in value.availableSizes) {
        if (!filters.has(value.availableSizes[index])) {
          return true;
        }
      }
      return false;
    }));
  }
);

export const getSortedProducts = createSelector(
  getFilteredProducts,
  getSortBy,
  (product, sortBy) => SortService.sort(product, sortBy)
);
