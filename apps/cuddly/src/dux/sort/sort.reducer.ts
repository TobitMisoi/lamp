import { SortBy, SortType } from "../../common/services/sort.service";
import { SortAction, SortActionTypes } from "./sort.actions";

export interface SortState {
  sortBy: SortBy;
}

const initialState: SortState = {
  sortBy: new SortBy(SortType.DEFAULT),
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const sortReducer = (
  state: SortState = initialState,
  action: SortAction
) => {
  switch (action.type) {
    case SortActionTypes.UPDATE_SORT_BY:
      return {
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
};
