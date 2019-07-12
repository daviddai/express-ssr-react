import express from "express";
import hbs from "handlebars";

import React from "react";
import { renderToString } from "react-dom/server";

import fs from "fs";
import path from "path";
import App from "../../react/app";

import { getHomeData } from "../api/home-gateway";

const router = express.Router();

router.get("/", (req, res) => {
    fs.readFile(path.resolve("src/express/views/home.html"), "utf8", (err, html) => {
        if (err) throw  err;

        getHomeData((data) => {
            const hbsTemplate = hbs.compile(html);
            const hbsToSend = hbsTemplate({react: renderToString(<App data={data} />), data: JSON.stringify(data)});

            res.send(hbsToSend);
        });
    });
});

export default router;