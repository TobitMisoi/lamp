import React from 'react';
import CartContainer from '../components/comon/cart/cartContainer';
import ShelfContainer from '../components/comon/shelf/shelfContainer';
import { AddCartProductActions } from '../dux/cartProduct/cart.product.action';
import { setProducts } from '../dux/product/product.dispatcher';
import rootStore from '../dux/rootStore';
import { cartProduct, product, product2 } from './data';

function App() {
  React.useEffect(() => {
    rootStore.dispatch(new AddCartProductActions(cartProduct));
    rootStore.dispatch(setProducts([product, product2]));
  }, []);

  return (
    <div className="App">
      <CartContainer />
      <ShelfContainer />
    </div>
  );
}

export default App;
