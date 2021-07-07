import * as express from "express";
import * as http from "http";
import debug from "debug";
import * as cors from "cors";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import { CartRoutes } from "./app/cart/cart.routes.config";
import { CommonRoutesConfig } from "./common/common.routes.config";
import { OrderRoutes } from "./app/order/order.routes.config";
import { ItemRoutes } from "./app/item/item.routes.config";
import { UserRoutes } from "./app/users/user.routes.config";

const app: express.Application = express();
const routes: Array<CommonRoutesConfig> = [];
const server: http.Server = http.createServer(app);
const debugLog: debug.IDebugger = debug("app");
const port = process.env.port || 3333;

app.use(express.json());
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send({ message: "Welcome to api!" });
});

routes.push(new CartRoutes(app));
routes.push(new OrderRoutes(app));
routes.push(new ItemRoutes(app));
routes.push(new UserRoutes(app));

export default server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(`Server running on http://localhost:${port}`);
});
