import Router from "koa-router";
import api from '../api/index.js'

const router = new Router();

router.post("/category/add", async (ctx) => {
	ctx.body = await ctx.request.body.name
	await api.category.add(ctx.request.body.name)
})

router.post("/category/find", async (ctx) => {
	ctx.body = await api.category.find(ctx.reuqest.body)
})

export default router;
