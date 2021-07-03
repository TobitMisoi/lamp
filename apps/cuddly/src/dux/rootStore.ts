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

const simplifyObjectMiddleware = () => (next: Dispatch<AnyAction>) => (
  action: AnyAction
) => {
  next({ ...action });
};

const middleware: Middleware[] = [thunk, simplifyObjectMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleware));

export default createStore(reducers, composedEnhancers);
