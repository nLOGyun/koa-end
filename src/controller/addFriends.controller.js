const {getAddFriends, addFriends} = require('../service/addFriends.service')
class FriendsController {

    async newFriends (ctx, next) {
        try {
            const {id: applyId, username: applyName} = ctx.state.user;
            const {userid, text:applyMes} = ctx.request.body

            const res = await getAddFriends({userid, applyId})
            if (!res) {
                ctx.body = {
                    code: 10001,
                    message: '请勿重复申请',
                    result: res
                }
                return
            }

            const addRes = await addFriends({userid, applyId, applyName, applyMes})
            ctx.body = {
                code: 0,
                message: '已发出申请',
                result: addRes
            }
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = new FriendsController()
