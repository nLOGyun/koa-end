const {getFriendsInfo} = require('../service/friends.service')
class FriendsController {
    async getFriends(ctx, next) {
        try{
            const {username} = ctx.request.body;
            const res = await getFriendsInfo({username})
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

module.exports = new FriendsController()
