import combineRouters from "koa-combine-routers";
import productRotuer from "./product.js";
import porductImageRouter from "./product_image.js";
import categoryRouter from './category.js'
import parentCategoryRouter from './parent_category.js'
import brandRouter from './brand.js'
import cooperationRouter from './cooperation.js'
const router = combineRouters(productRotuer, porductImageRouter, categoryRouter, parentCategoryRouter, brandRouter, cooperationRouter);


export default router;
