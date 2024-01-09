const Router = require('@koa/router')
const {userRegister, userLogin, getInfo, getOne} = require('../controller/user.controller')
const {verifyLogin} = require("../middleware/user.middleware")
const {auth} = require('../middleware/auth.middleware')

// 配置接口统一模块路径
const router = new Router({prefix: '/user'})
router.get('/add', (ctx, next) => {
    ctx.body = 'user路由配置成功'
})
router.post('/register', userRegister)
router.post('/login', verifyLogin, userLogin)
router.get('/getInfo', auth, getInfo)
router.get('/findOne', getOne)

module.exports = router
