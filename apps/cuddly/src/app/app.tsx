import React from 'react';
import CartContainer from '../components/comon/cart/cartContainer';
import ShelfContainer from '../components/comon/shelf/shelfContainer';
import { AddCartProductActions } from '../dux/cartProduct/cart.product.action';
import { setProducts } from '../dux/product/product.dispatcher';
import rootStore from '../dux/rootStore';
import { cartProduct, product, product2, product3 } from './data';
import '../assets/styles/index.scss';
import { Footer, Header } from '@cuddly/ui';

function App() {
  React.useEffect(() => {
    rootStore.dispatch(new AddCartProductActions(cartProduct));
    rootStore.dispatch(setProducts([product, product2, product3]));
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <CartContainer /> */}
      <ShelfContainer />
      <Footer />
    </div>
  );
}

export default App;
