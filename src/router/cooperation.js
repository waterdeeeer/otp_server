import Router from 'koa-router'
import api from '../api/index.js'

const router = new Router()
router.post('/cooperation/find', async (ctx) => {
	ctx.body = await api.cooperation.find(ctx.request.body)
})
router.post('/cooperation/add', async (ctx) => {
	await api.cooperation.add(ctx.request.body)
})

export default router
