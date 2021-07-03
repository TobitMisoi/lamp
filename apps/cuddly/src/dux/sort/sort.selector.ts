import { AppState } from "../rootReducer";
import { createSelector } from "reselect";
import { SortState } from "./sort.reducer";

const getSortState = (state: AppState) => state.sortState;

export const getSortBy = createSelector(
  getSortState,
  (state: SortState) => state.sortBy
);
