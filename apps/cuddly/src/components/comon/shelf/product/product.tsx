/* eslint-disable @nrwl/nx/enforce-module-boundaries */
// TODO: //#endregion4
import React from 'react';
import { Product } from 'apps/cuddly/src/common/business-model/product';
import { AddCartProduct } from '../shelfContainer';

interface Props {
  product: Product;
  addToCart: AddCartProduct;
  key: number;
}

const ProductView: React.FunctionComponent<Props> = (props) => {
  const { addToCart, product } = props;

  console.log(product.currencyId);

  const formattedPrice = product.price;
  let productInstallment;

  if (product.installments) {
    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span>
        <b>
          {product.currencyFormat}
          {product.currencyId}
        </b>
      </div>
    );
  }

  return (
    <div className="shelf-item" data-sku={product.sku}>
      <div className="shelf-item__thumb">
        <img
          // TODO: add real image from backend //#region 26
          src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt={product.title}
          title={product.title}
        />
        <div className="action">
          <ul>
            <li onClick={() => addToCart(product, 1)}>cart</li>
            <li>shop</li>
            <li>remove</li>
          </ul>
        </div>
      </div>
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice}</b>
          <span>{product.currencyFormat + product.originalPrice}</span>
        </div>
        {/* {productInstallment} */}
        {product.isFreeShipping && (
          <div className="shelf-stopper">Free delivery</div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
