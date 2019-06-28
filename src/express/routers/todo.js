import express from "express";
import hbs from "handlebars";

import React from "react";
import { renderToString } from "react-dom/server"
import { Provider } from "react-redux";

import App from "../../react/app/todo/app";

import { getStore } from "../../react/app/todo/store/index";

import fs from "fs";
import path from "path";


const router = express.Router();

router.get("/", (req, res) => {
    fs.readFile(path.resolve("src/express/views/todo.html"), "utf8", (err, data) => {
        if (err) throw err;

        const hbsTemplate = hbs.compile(data);
        const storeState = {todoList: ["Learn ssr react", "Learn spring webflux"]};
        const store = getStore(storeState);
        const reactComponent = renderToString(<Provider store={store}><App /></Provider>);
        const hbsToSend = hbsTemplate({react: reactComponent, storeState: JSON.stringify(storeState)});

        res.send(hbsToSend);
    });
});

export default router;