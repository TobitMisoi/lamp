/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  addFilteredSize,
  removeFilteredSize,
} from "apps/cuddly/src/dux/filter/filter.dispatcher";
import { AppState } from "apps/cuddly/src/dux/rootReducer";
import { getFilteredSize } from "apps/cuddly/src/dux/filter/filter.selector";
import { connect } from "react-redux";
import Filter from "./filter";

type AddFilteredSize = (size: string) => void;
type RemoveFilteredSize = (size: string) => void;

interface DispatchProps {
  addFilteredSizes: AddFilteredSize;
  removeFilteredSizes: RemoveFilteredSize;
}

interface StateProps {
  filteredSizes: Set<string>;
}

// TODO: fix //#endregion25
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  addFilteredSizes: (size: string) => dispatch(addFilteredSize(size)),
  removeFilteredSizes: (size: string) => dispatch(removeFilteredSize(size)),
});

const mapStateToProps = (state: AppState): StateProps => ({
  filteredSizes: new Set(getFilteredSize(state)),
});

export type FilterProp = DispatchProps & StateProps;

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
