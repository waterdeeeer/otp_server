import combineRouters from "koa-combine-routers";
import productRotuer from "./product.js";
import porductImageRouter from "./product_image.js";

const router = combineRouters(productRotuer, porductImageRouter);

export default router;
