/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Product } from "apps/cuddly/src/common/business-model/product";
import { SortBy } from "apps/cuddly/src/common/services/sort.service";
import { addCartProduct } from "apps/cuddly/src/dux/cartProduct/cart.product.dispatcher";
import { getFilteredSize } from "apps/cuddly/src/dux/filter/filter.selector";
import { getSortedProducts } from "apps/cuddly/src/dux/product/product.selector";
import { AppState } from "apps/cuddly/src/dux/rootReducer";
import { connect } from "react-redux";
import Shelf from "./shelf";

export type AddCartProduct = (product: Product, quantity: number) => void;
export type GetSortedProduct = (
  products: Product[],
  sortBy: SortBy
) => Product[];

interface StateProps {
  products: Product[];
  filteredSizes: Set<string>;
}

interface DispatchProps {
  addToCart: AddCartProduct;
}

const mapStateToProps = (state: AppState): StateProps => ({
  filteredSizes: new Set(getFilteredSize(state)),
  products: getSortedProducts(state),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  addToCart: (product: Product, quantity: number) =>
    dispatch(addCartProduct(product, quantity)),
});

export type ShelfProp = StateProps & DispatchProps;

export default connect(mapStateToProps, mapDispatchToProps)(Shelf);
