const jwt = require('jsonwebtoken')
const {TokenExpiredError, JsonWebTokenError} = require('../error/error')

const auth = async (ctx, next) => {
    try {
        let key = 'fw-token'
        const token = ctx.request.header[key]
        ctx.state.user = jwt.verify(token, 'fjhtglxt')
    } catch (err) {
        console.log(err)
        switch (err.name) {
            case 'TokenExpiredError':
                console.log('token已过期', err)
                ctx.body = TokenExpiredError
                // return ctx.app.emit('error', TokenExpiredError, ctx)
            case 'JsonWebTokenError':
                console.log('无效的token', err)
                ctx.body = JsonWebTokenError
                // return ctx.app.emit('error', JsonWebTokenError, ctx)
        }
    }
    await next()
}

module.exports = {
    auth
}
