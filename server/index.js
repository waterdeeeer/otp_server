import Koa from "koa";
import Router from "koa-router";
import mongoose from "mongoose";

import Product from "../db/model/product.js";

const app = new Koa();
const router = new Router();

const mongooseOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect(
  "mongodb+srv://public:123@onthepiknic.x4rrw.mongodb.net/onthepiknic?retryWrites=true&w=majority",
  mongooseOption
);

router.get("/", async (ctx, next) => {
  ctx.body = await Product.find({});
});

router.get("/hi", (ctx, next) => {
  ctx.body = "Hello World!!!!";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
  console.log("The server is listeneing to port 4000");
});
