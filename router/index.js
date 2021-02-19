import combineRouters from "koa-combine-routers";
import productRotuer from "./product.js";

const router = combineRouters(productRotuer);

export default router;
