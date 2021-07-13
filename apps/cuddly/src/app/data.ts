import { CartProduct } from "../common/business-model/cartProducts";
import { Product } from "../common/business-model/product";

const cartProduct: CartProduct = {
  availableSizes: ["S", "XS"],
  currencyFormat: "Ksh",
  currencyId: "KSH",
  description: "4 MSL",
  id: 12,
  installments: 9,
  isFreeShipping: true,
  itemQuantity: 1,
  price: 1090,
  originalPrice: 990,
  sku: 12064273040195392,
  style: "Black with custom print",
  title: "Cat Tee Black T-Shirt",
};

const product: Product = {
  availableSizes: ["S", "XS"],
  currencyFormat: "Ksh",
  currencyId: "KSH",
  description: "4 MSL",
  id: 12,
  installments: 9,
  isFreeShipping: true,
  price: 1290,
  originalPrice: 1590,
  sku: 12064273040195392,
  style: "Black with custom print",
  title: "Cat Tee Black T-Shirt",
};

const product2: Product = {
  availableSizes: ["S", "XS"],
  currencyFormat: "Ksh",
  currencyId: "KSH",
  description: "4 MSL",
  id: 12,
  installments: 9,
  isFreeShipping: true,
  price: 6900,
  originalPrice: 9900,
  sku: 51498472915966366,
  style: "Black with custom print",
  title: "Cat Tee Black T-Shirt",
};
const product3: Product = {
  availableSizes: ["S", "XS"],
  currencyFormat: "Ksh",
  currencyId: "KSH",
  description: "4 MSL",
  id: 12,
  installments: 9,
  isFreeShipping: true,
  price: 1090,
  originalPrice: 1290,
  sku: 51498472915966367,
  style: "Black with custom print",
  title: "Cat Tee Black T-Shirt",
};

export { cartProduct, product, product2, product3 };
