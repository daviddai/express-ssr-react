import express from 'express';

import todo from "./routers/todo";
import slider from "./routers/slider";

const app = express();

app.use(express.static("build"));
app.use(express.static("public"));
app.use("/todo", todo);
app.use("/slider", slider);

const port = 3000;

app.listen(port, () => {
    console.log(`Running on ${port}`);
});