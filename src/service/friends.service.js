const Friends = require('../model/friends.model')      // 引入friends模型
const User = require('../model/user.model')
const {Op} = require("sequelize");     //引入user模型

class FriendsService{
    async getFriendsInfo ({username}) {
        const whereOpt = {} // 查询条件
        username && Object.assign(whereOpt, {username})
        if (!username) return false
        const UserRes = await User.findOne({
            attributes: ['id', 'username', 'password'],
            where: whereOpt
        })
        if (!UserRes) return []
        let userId = UserRes.dataValues.id
        let FriendsRes = await Friends.findOne({
            attributes: ['id', 'userid', 'friendsId'],
            where: {
                userid: userId
            }
        })
        if (!FriendsRes) {
            FriendsRes = await Friends.create({userid: userId, friendsId: userId})
        }

        let FriendsId = String(FriendsRes.dataValues?.friendsId)
        let FriendsInfo = await User.findAll({
            attributes: ['username'],
            where: {
                id: {
                    [Op.or]: FriendsId.split(',')
                }
            }
        })
        let res = []
        if (!FriendsInfo) return []
        FriendsInfo.forEach(item => {
            res.push(item.dataValues)
        })
        return res
    }
    /*async createUser(username,password){
        return await User.create({username,password})//创建数据库条目 更多查询器参考https://www.sequelize.com.cn/core-concepts/model-querying-basics
    }
    async getUserInfo({username, id}) {
        const whereOpt = {} // 创建一个对象，这个对象包含了需要查询的条件
        id && Object.assign(whereOpt, {id}) // 合并对象，如果有这个参数的话就合并进去进行查询
        username && Object.assign(whereOpt, {username})

        const res = await User.findOne({
            attributes: ['id', 'username', 'password', 'createdAt', 'updatedAt'],
            where: whereOpt
        })

        return res ? res.dataValues : false
    }*/
}

module.exports = new FriendsService()
