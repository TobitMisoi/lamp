import { CartProduct } from "../common/business-model/cartProducts";
import { Product } from "../common/business-model/product";

const cartProduct: CartProduct = {
  availableSizes: ["S", "XS"],
  currencyFormat: "$",
  currencyId: "USD",
  description: "4 MSL",
  id: 12,
  installments: 9,
  isFreeShipping: true,
  itemQuantity: 1,
  price: 10.9,
  originalPrice: 9.9,
  sku: 12064273040195392,
  style: "Black with custom print",
  title: "Cat Tee Black T-Shirt",
};

const product: Product = {
  availableSizes: ["S", "XS"],
  currencyFormat: "$",
  currencyId: "USD",
  description: "4 MSL",
  id: 12,
  installments: 9,
  isFreeShipping: true,
  price: 12.9,
  originalPrice: 15.9,
  sku: 12064273040195392,
  style: "Black with custom print",
  title: "Cat Tee Black T-Shirt",
};

const product2: Product = {
  availableSizes: ["S", "XS"],
  currencyFormat: "$",
  currencyId: "USD",
  description: "4 MSL",
  id: 12,
  installments: 9,
  isFreeShipping: true,
  price: 6.9,
  originalPrice: 9.9,
  sku: 51498472915966366,
  style: "Black with custom print",
  title: "Cat Tee Black T-Shirt",
};
const product3: Product = {
  availableSizes: ["S", "XS"],
  currencyFormat: "$",
  currencyId: "USD",
  description: "4 MSL",
  id: 12,
  installments: 9,
  isFreeShipping: true,
  price: 10.9,
  sku: 51498472915966367,
  style: "Black with custom print",
  title: "Cat Tee Black T-Shirt",
  originalPrice: 12.9,
};

export { cartProduct, product, product2, product3 };
