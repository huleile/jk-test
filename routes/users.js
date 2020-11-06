const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

/**
 * @api {get}         /users/:id     GetUser
 * @apiName           GetUser
 * @apiGroup          User
 * @apiDescription    获取User详情
 * @apiParam (params) {String}  id          User ID
 */
router.get('/:id', function (ctx, next) {
  ctx.body = `this is the user${id} response!`
})

module.exports = router
