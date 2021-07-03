import { Action } from "redux";
import { SortBy } from "../../common/services/sort.service";

export enum SortActionTypes {
  UPDATE_SORT_BY = "[SORT BY] update",
}

export class UpdateSortAction implements Action {
  public type: SortActionTypes = SortActionTypes.UPDATE_SORT_BY;
  constructor(public sortBy: SortBy) {}
}

export type SortAction = UpdateSortAction;
