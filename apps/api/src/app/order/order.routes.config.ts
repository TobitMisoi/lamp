import * as express from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";

export class OrderRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "OrderRoutes");
  }

  configureRoutes() {
    this.app
      .route(`/order/:id`)
      .get((req, res) => {
        res.status(200).send({ message: "Orders" });
      })
      .post();

    return this.app;
  }
}
