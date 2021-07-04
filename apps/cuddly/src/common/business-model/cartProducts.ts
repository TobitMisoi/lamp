import { Product } from "./product";

export interface CartProductOptions {
  itemQuantity: number;
}

export interface CartProduct extends CartProductOptions, Product {}
