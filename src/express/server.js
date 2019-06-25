import express from 'express';

import ssr from "./routes/ssr";

const app = express();

app.use(express.static("build"));
app.use(express.static("public"));
app.use("/first-ssr", ssr);

const port = 3000;

app.listen(port, () => {
    console.log(`Running on ${port}`);
});