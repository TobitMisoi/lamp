/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { CartProps } from './cartContainer';
import CartProductContainer from './cartProduct/cart.product.container';
import { CartProduct } from 'apps/cuddly/src/common/business-model/cartProducts';

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<CartProps, State> {
  public state = {
    isOpen: true,
  };

  public render(): React.ReactNode {
    const { isOpen } = this.state;

    // classnames
    const classes = isOpen ? 'float-cart' : 'float-cart float-cart--cart-close';
    const trolleyCss = isOpen ? 'trolley' : 'trolley trolley--cart-close';
    const trolleyItemQuantityCss = isOpen
      ? 'item-quantity-icon'
      : 'item-quantity-icon item-quantity-icon--cart-close';

    const cartProducts = [];

    for (const k in this.props.cartProducts) {
      console.log(k);
      cartProducts.push(this.props.cartProducts[k]);
    }

    const itemQuantity = cartProducts.reduce(
      (sum: number, product: CartProduct) => {
        return sum + product.itemQuantity;
      },
      0
    );

    return (
      <div className={classes}>
        <div className="cart-close-button" onClick={this.toggleCartDrawer}>
          X
        </div>
        <div className="float-cart_content">
          <div className="float-cart_header">
            <div className={trolleyCss} onClick={this.toggleCartDrawer}>
              <span className={trolleyItemQuantityCss}>{itemQuantity}</span>
            </div>
            <span className="header-title">Cart</span>
          </div>
          <div className="cart-shelf">
            {cartProducts.map((val, index) => (
              <CartProductContainer key={index} product={val} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  private toggleCartDrawer = () => {
    this.setState((prev: State) => ({ isOpen: !prev.isOpen }));
  };
}

export default Cart;
