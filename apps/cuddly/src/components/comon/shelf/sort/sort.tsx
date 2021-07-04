/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { SortBy, SortType } from 'apps/cuddly/src/common/services/sort.service';
import * as React from 'react';
import { Selectbox } from '../../../layout';
import { SortProps } from './sortContainer';

class Sort extends React.PureComponent<SortProps> {
  private sortByOptions: any = {
    'highest to lowest': new SortBy(SortType.HIGHEST_PRICE_FIRST),
    'lowest to highest': new SortBy(SortType.LOWEST_PRICE_FIRST),
    "select": new SortBy(SortType.DEFAULT),
  };
  public render() {
    return (
      <div className="sort">
        <Selectbox
          options={Object.keys(this.sortByOptions)}
          handleOnChange={this.handleSortOptionsChange}
        ></Selectbox>
      </div>
    );
  }

  private handleSortOptionsChange = (value: string) => {
    const sortBy = this.sortByOptions[value];
    this.props.updateSort(sortBy);
  };
}

export default Sort;
