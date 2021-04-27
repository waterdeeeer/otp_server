import Router from 'koa-router'
import api from '../api/index.js'


const router = new Router()

router.post('/brand/find', async (ctx) => {
	ctx.body = await api.brand.find(ctx.request.body)
})

router.post('/brand/add', async (ctx) => {
	await api.brand.add(ctx.request.body)

})
export default router
