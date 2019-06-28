import express from "express";
import hbs from "handlebars";

import React from "react";
import { renderToString } from "react-dom/server"

import fs from "fs";
import path from "path";
import App from "../../react/app/carousel/app";

const router = express.Router();

router.get("/", (req, res) => {
    fs.readFile(path.resolve("src/express/views/slider.html"), "utf8", (err, data) => {
       if (err) throw  err;

       const hbsTemplate = hbs.compile(data);
       const hbsToSend = hbsTemplate({react: renderToString(<App />)});

       res.send(hbsToSend);
    });
});

export default router;