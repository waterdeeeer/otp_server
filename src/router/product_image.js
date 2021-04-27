import Router from "koa-router";

import Model from "../model/index.js";

const router = new Router();
const { product } = Model;

// find products by name

export default router.get("/product/image", async (ctx) => {
  //const name = ctx.params.name;
  const prod = await product.findOne({});
  ctx.body = prod;
});
