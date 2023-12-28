const fs = require('fs') // node.js文件处理模块
const Router = require('@koa/router')
const router = new Router()

// 循环router路由文件  循环引入
fs.readdirSync(__dirname).forEach(file => {
    if (file !== 'index.js') {
        let r = require('./' + file)
        router.use(r.routes())
    }
})

module.exports = router
