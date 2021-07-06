import * as express from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";

export class ItemRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "ItemRoutes");
  }

  configureRoutes() {
    this.app.route(`/items`).get((req, res) => {
      res.status(200).send({ message: "Items" });
    });

    return this.app;
  }
}
