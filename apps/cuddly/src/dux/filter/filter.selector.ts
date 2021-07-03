import { AppState } from "../rootReducer";
import { createSelector } from "reselect";
import { FilterState } from "./filter.reducer";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getFilterState = (state: AppState) => state.filterState;

export const getFilteredSize = createSelector(
  getFilterState,
  (state: FilterState) => state.filteredSizes
);
