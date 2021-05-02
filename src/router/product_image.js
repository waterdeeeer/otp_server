import Router from "koa-router";

import api from "../api/index.js";
import Model from "../model/index.js";

const router = new Router();
const { product } = Model;

// find products by name
router.post("/product_image/add", async (ctx) => {
  await api.image.add(ctx.request.body);
});
router.get("/product_image", async (ctx) => {
  //const name = ctx.params.name;
  const prod = await product.findOne({});
  ctx.body = prod;
});

export default router;
