/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import FilterContainer from './filter/filterContainer';
import ProductView from './product/product';
import { ShelfProp } from './shelfContainer';
import { Product } from 'apps/cuddly/src/common/business-model/product';
import ShelfHeader from './shelfHeader/shelfHeader';

interface State {
  selectedSizes: [];
  allSelected: boolean;
}

class Shelf extends React.Component<ShelfProp, State> {
  public render(): React.ReactNode {
    return (
      <>
        <FilterContainer />
        <ShelfHeader productsLength={this.props.products.length} />
        <div className="shelf">
          <div className="shelf-container">
            {/* <div className="shelf-container__wrap"> */}
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
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default Shelf;
