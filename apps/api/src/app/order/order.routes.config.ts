import * as express from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";

export class OrderRoutesConfig extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "OrderRoutes");
  }

  configureRoutes() {
    this.app.route(`/order`).get((req, res) => {
      res.status(200).send({ message: "Orders" });
    });

    return this.app;
  }
}
