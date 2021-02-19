import Router from "koa-router";

import Model from "../model/index.js";

const router = new Router();
const { product } = Model;

// find products by name

export default router.get("/product", async (ctx) => {
  const name = ctx.params.name;
  ctx.body = await product.find({ name: { $regex: name ? name : "" } });
});
