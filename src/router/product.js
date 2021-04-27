import Router from "koa-router";
import api from '../api/index.js'

const router = new Router();

router.post("/product/find", async (ctx) => {
    ctx.body = await api.product.find(ctx.request.body)
})
router.get("/product/top_5", async (ctx) => {
    ctx.body = await api.product.topFive()
})
export default router
