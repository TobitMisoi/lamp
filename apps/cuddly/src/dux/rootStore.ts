import { Dispatch } from "react";
import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  Middleware,
} from "redux";
import thunk from "redux-thunk";
import { reducers } from "./rootReducer";

// const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const simplifyObjectMiddleware = () => (next: Dispatch<AnyAction>) => (
  action: AnyAction
) => {
  next({ ...action });
};

// eslint-disable-next-line @typescript-eslint/ban-types
// const enhancers: Function[] = [devToolsExtension({ name: "shopping cart" })];

const middleware: Middleware[] = [thunk, simplifyObjectMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleware));

export default createStore(reducers, composedEnhancers);
