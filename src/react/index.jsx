import React from "react";
// import { Provider } from "react-redux";
import { hydrate } from "react-dom";
// import App from "./app/todo/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./app/carousel/app";
// import {getStore} from "./app/todo/store";

// const storeState = window.storeState;
// delete(window.storeState);
// const store = getStore(storeState);

hydrate(
    <App/>,
    document.getElementById("app")
);