const Router = require('@koa/router')
const {getFriends} = require('../controller/friends.controller')

// 配置接口统一模块路径
const router = new Router({prefix: '/friends'})
router.post('/getFriendsList', getFriends)

module.exports = router
