const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})


/**
 * @api {post} /books CreateBook
 * @apiName     创建一条书籍信息
 * @apiGroup    Book
 * @apiDescription  插入一条书籍信息
 * @apiParam (body) {String} name 书名
 * @apiParam (body) {String} author 作者
 * @apiParam (body) {String} press 出版社
 */

 /**
 * @api {get} /books GetBooks
 * @apiName     获取书籍信息
 * @apiGroup    Book
 * @apiDescription  获取一条书籍信息
 * @apiParam (query) {String} name 书名
 */

module.exports = router
