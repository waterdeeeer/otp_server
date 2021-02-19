import Router from "koa-router";

import Product from "../model/product.js";

const router = new Router();

// find products by name

export default router.get("/product", async (ctx) => {
  const name = ctx.params.name;
  ctx.body = Product.find({ name: { $regex: name ? name : "" } });
});
