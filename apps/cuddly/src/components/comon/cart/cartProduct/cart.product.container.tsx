/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { connect } from 'react-redux';
import CartProductView from './cart.product';
import { CartProduct } from 'apps/cuddly/src/common/business-model/cartProducts';
import { removeCartProduct } from 'apps/cuddly/src/dux/cartProduct/cart.product.dispatcher';

type removeCartProductDispatchProp = (
  cartProduct: CartProduct,
  id: number
) => void;

interface DispatchProps {
  removeCartProduct: removeCartProductDispatchProp;
}

interface Prop {
  product: CartProduct;
  key: number;
}

export type CartProductProps = DispatchProps & Prop;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  removeCartProduct: (cartProduct: CartProduct, id: number) =>
    dispatch(removeCartProduct(cartProduct, id)),
});

export default connect(null, mapDispatchToProps)(CartProductView);
