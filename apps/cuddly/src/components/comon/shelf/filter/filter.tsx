import React from 'react';
import { Checkbox } from '../../../layout';
import { FilterProp } from './filterContainer';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

class Filter extends React.PureComponent<FilterProp> {
  public render() {
    return (
      <div className="filter">
        <h4 className="title">Sizes:</h4>
        {availableSizes.map((val) => (
          <Checkbox
            label={val}
            handleCheckboxChange={this.updatedFilteredSize}
          />
        ))}
      </div>
    );
  }

  private updatedFilteredSize = (size: string) => {
    if (this.props.filteredSizes.has(size)) {
      this.props.removeFilteredSizes(size);
    } else {
      this.props.addFilteredSizes(size);
    }
  };
}

export default Filter;
