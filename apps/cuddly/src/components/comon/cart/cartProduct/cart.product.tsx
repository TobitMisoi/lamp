import * as React from 'react';
import { CartProductProps } from './cart.product.container';

interface State {
  isOverRemoveIcon: boolean;
}

class CartProductView extends React.Component<CartProductProps, State> {
  public state = {
    isOverRemoveIcon: false,
  };

  public render(): React.ReactNode {
    const { product } = this.props;

    const { isOverRemoveIcon } = this.state;
    const descCss = isOverRemoveIcon ? 'desc desc--remove' : 'desc';

    return (
      <div className="card-item">
        <div
          className="remove-icon"
          onMouseEnter={this.toggleMouseOverState}
          onMouseLeave={this.toggleMouseOverState}
          onClick={() => this.props.removeCartProduct(product, product.sku)}
        />
        <div className="thumb">
          <img
            src="https://images.unsplash.com/photo-1521330784804-5f69f8a17b1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            alt={product.title}
            title={product.title}
          />
        </div>
        <div className="details">
          <p className="title">{product.title}</p>
          <p className={descCss}>
            {`${product.availableSizes[0]} | ${product.style}`} <br />
            Quantity: {product.itemQuantity}
          </p>
        </div>
        <div className="price-css">
          <p>{`${product.currencyFormat} ${product.price}`}</p>
        </div>
      </div>
    );
  }

  private toggleMouseOverState = () => {
    this.setState((prev) =>
      this.setState({
        isOverRemoveIcon: !prev.isOverRemoveIcon,
      })
    );
  };
}

export default CartProductView;
