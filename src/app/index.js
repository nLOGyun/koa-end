const Koa = require('koa')
const router = require('../router/index')
const {koaBody} = require('koa-body')
const app = new Koa()

app.use(koaBody())
// allowedMethods koa-router的中间件，用于处理请求方式不同进行特殊处理
app.use(router.routes()).use(router.allowedMethods())
app.on('error', (err, ctx) => {
    let status = 500
    switch (err.code) {
        case '10001':
            status = 400
            break
        case '10002':
            status = 409
            break
        default:
            status = 500
    }
    ctx.status = status
    ctx.body = err
})

module.exports = app
