import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import combinedReducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware())
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
