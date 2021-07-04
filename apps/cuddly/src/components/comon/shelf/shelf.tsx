/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import FilterContainer from './filter/filterContainer';
import ProductView from './product/product';
import { ShelfProp } from './shelfContainer';
import { Product } from 'apps/cuddly/src/common/business-model/product';


interface State {
  selectedSizes: [];
  allSelected: boolean;
}

class Shelf extends React.Component<ShelfProp, State> {
  public render(): React.ReactNode {
    return (
      <>
        <div className="shelf"></div>
        <FilterContainer />
        <div className="shelf-container">
          {this.props.products.map((val: Product, index: number) => {
            return (
              <ProductView
                product={val}
                addToCart={this.props.addToCart}
                key={index}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Shelf;
