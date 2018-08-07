import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import configureStore from "./store/configureStore";
import Root from "./containers/Root";

const store = configureStore();
const rootEl = document.getElementById("root");

ReactDOM.render(<Root store={store} />, rootEl);
