import express from "express";

import React from "react";
import { renderToString } from "react-dom/server"
import hbs from "handlebars";

import App from "../../react/components/app";

import fs from "fs";
import path from "path";

const router = express.Router();

router.get("/", (req, res) => {
    fs.readFile(path.resolve("src/express/views/index.html"), "utf8", (err, data) => {
        if (err) throw err;

        const hbsTemplate = hbs.compile(data);
        const todoList = ["Learn ssr react", "Learn spring webflux"];
        const reactComponent = renderToString(<App todoList={todoList}/>);
        const hbsToSend = hbsTemplate({react: reactComponent});

        res.send(hbsToSend);
    });
});

export default router;