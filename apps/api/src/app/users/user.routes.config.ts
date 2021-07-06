import * as express from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";

export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UserRoutes");
  }

  configureRoutes(): express.Application {
    this.app.route(`/user`).get((req, res) => {
      res.status(200).send({ message: "User routes" });
    });

    return this.app;
  }
}
