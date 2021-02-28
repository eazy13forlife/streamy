import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import combinedReducers from "./reducers";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
