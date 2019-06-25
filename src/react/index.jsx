import React from "react";
import { hydrate } from "react-dom";
import App from "./components/app";

import "bootstrap/dist/css/bootstrap.min.css";

hydrate(<App todoList={[]} />, document.getElementById("app"));