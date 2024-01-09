const {UserRegisterError} = require('../error/error')
const {createUser, getUserInfo, findUser} = require('../service/user.service')
const jwt = require('jsonwebtoken')
class UserController {
    async userRegister(ctx, next) {
        try {
            const {username, password} = ctx.request.body
            console.log(username, password)
            const res = await createUser(username, password)
            ctx.body = {
                code: 0,
                message: '注册成功',
                result: res
            }
        } catch (err) {
            console.log('请求出错', err)
            ctx.app.emit('error', UserRegisterError, ctx)
        }
    }
    async userLogin(ctx, next) {
        try{
            const {username} = ctx.request.body
            const {password, ...res} = await getUserInfo({username})
            ctx.body = {
                code: 0,
                message: '登录成功',
                result: {
                    userInfo: {
                        username
                    },
                    token: jwt.sign(res, 'fjhtglxt', {expiresIn: '1d'})
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
    async getInfo(ctx, next) {
        try{
            const {id} = ctx.state.user;
            const res = await getUserInfo({id})
            ctx.body = {
                code: 0,
                message: '查询成功',
                result: res
            }
        } catch (err) {
            console.log(err)
        }
    }
    async getOne(ctx) {
        try{
            const {username} = ctx.request.query;
            const res = await findUser({username})
            ctx.body = {
                code: 0,
                message: '查询成功',
                result: res
            }
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new UserController()
