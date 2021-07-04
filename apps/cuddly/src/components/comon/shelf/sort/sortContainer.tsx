/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { SortBy } from 'apps/cuddly/src/common/services/sort.service';
import { UpdateSortAction } from 'apps/cuddly/src/dux/sort/sort.actions';
import { connect } from 'react-redux';
import Sort from './sort';

type updateSortBy = (sortBy: SortBy) => void;

interface DispatchProps {
  updateSort: updateSortBy;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  updateSort: (sortBy) => dispatch(new UpdateSortAction(sortBy)),
});

export type SortProps = DispatchProps;

export default connect(null, mapDispatchToProps)(Sort);
