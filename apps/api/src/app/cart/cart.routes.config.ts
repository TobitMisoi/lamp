import * as express from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";
import cartControllers from "./controllers/cart.controllers";

export class CartRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "CartRoutes");
  }

  configureRoutes() {
    this.app.route(`/cart/:id`).get(cartControllers.getCartItems).post();

    this.app.route(`/cart/:userId/:itemId`);

    return this.app;
  }
}
