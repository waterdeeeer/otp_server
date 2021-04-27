import Router from 'koa-router'
import api from '../api/index.js'

const router = new Router()

router.post("/parent_category/add", async (ctx) => {
	ctx.body = ctx.request.body
	await api.parentCategory.add(ctx.request.body)

})
router.post("/parent_category/find", async (ctx) => {
	ctx.body = await api.parentCategory.find(ctx.request.body)

})
export default router
