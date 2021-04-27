import Koa from "koa";
import bodyParser from "koa-bodyparser";

import cors from "@koa/cors";
import router from "./router/index.js";
import {initDB} from './api/index.js'


const app = new Koa();

initDB();

app.use(cors()).use(bodyParser()).use(router());

app.listen(4000, () => {
    console.log("The server is listeneing to port 4000");
});

export default app;
