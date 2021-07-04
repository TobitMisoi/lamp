/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { connect } from "react-redux";
import { Product } from "apps/cuddly/src/common/business-model/product";

import Cart from "./cart";
import { Dictionary } from "apps/cuddly/src/common/models/dictionary";
import { CartProduct } from "apps/cuddly/src/common/business-model/cartProducts";
import { addCartProduct } from "apps/cuddly/src/dux/cartProduct/cart.product.dispatcher";
import { AppState } from "apps/cuddly/src/dux/rootReducer";
import { getCartProducts } from "apps/cuddly/src/dux/cartProduct/cart.product.selector";

type addCartProductDispatchProps = (product: Product, quantity: number) => void;

interface DispatchProps {
  addCartProduct: addCartProductDispatchProps;
}

interface StateProps {
  cartProducts: Dictionary<CartProduct>;
}

export type CartProps = StateProps & DispatchProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  addCartProduct: (product: Product, quantity: number) =>
    dispatch(addCartProduct(product, quantity)),
});

const mapStateToProps = (state: AppState): StateProps => ({
  cartProducts: getCartProducts(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
