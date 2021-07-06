import * as express from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";

export class CartRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "CartRoutes");
  }

  configureRoutes() {
    this.app
      .route(`/cart/:id`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send({ message: "Cart" });
      })
      .post();

    this.app.route(`/cart/:userId/:itemId`);

    return this.app;
  }
}
