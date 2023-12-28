const Router = require('@koa/router')

// 配置接口统一模块路径
const router = new Router({prefix: '/role'})
router.get('/add', (ctx, next) => {
    ctx.body = 'role路由配置成功'
})

module.exports = router
