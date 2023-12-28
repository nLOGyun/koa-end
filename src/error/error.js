module.exports = {
    UserRegisterError: {
        code: '10001',
        message: '用户名已被注册！',
        result: ''
    },
    userPasswordError: {
        code: '10001',
        message: '用户名密码错误',
        result: ''
    },
    userIsUndefined: {
        code: '10001',
        message: '用户名不存在',
        result: ''
    },
    TokenExpiredError: {
        code: '10001',
        message: 'token已过期'
    },
    JsonWebTokenError: {
        code: 401,
        message: '无效的token'
    }
}
