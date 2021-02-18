const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', (ctx,next) => {
	ctx.body = 'POTATOJOAYO';
});

router.get('/hi', (ctx,next) =>{
	ctx.body = 'Hello World!!!!';
});

app.use(router.routes()); 
app.use(router.allowedMethods()); 

app.listen(4000, () => {
	console.log('The server is listeneing to port 4000'); 
});
