import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import Routes from "./Routes";
import "./style.css";

const WrapperRoutes = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(WrapperRoutes, document.getElementById("root"));
