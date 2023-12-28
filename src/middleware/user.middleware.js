const {getUserInfo} = require("../service/user.service")
const {userPasswordError, userIsUndefined, userLoginError} = require("../error/error")
const verifyLogin = async (ctx, next) => {
    try{
        const {username, password} = ctx.request.body
        const res = await getUserInfo({username})
        if (!res) {
            console.log('用户不存在', ctx.request.body)
            ctx.app.emit('error', userIsUndefined, ctx)
            return
        }
        if (password !== res.password) {
            ctx.app.emit('error', userPasswordError, ctx)
            return
        }
    } catch (err) {
        ctx.app.emit('error', userLoginError, err)
    }
    await next()
}

module.exports = {
    verifyLogin
}
