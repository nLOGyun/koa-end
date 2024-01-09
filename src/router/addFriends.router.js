const Router = require('@koa/router')
const {newFriends} = require('../controller/addFriends.controller')
const {auth} = require('../middleware/auth.middleware')

// 配置接口统一模块路径
const router = new Router({prefix: '/addFriends'})
router.post('/newFriends', auth, newFriends)

module.exports = router
