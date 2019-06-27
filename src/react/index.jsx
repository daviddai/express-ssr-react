import React from "react";
import { Provider } from "react-redux";
import { hydrate } from "react-dom";
import App from "./components/app";

import "bootstrap/dist/css/bootstrap.min.css";
import {getStore} from "./store";

const storeState = window.storeState;
delete(window.storeState);
const store = getStore(storeState);

hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);