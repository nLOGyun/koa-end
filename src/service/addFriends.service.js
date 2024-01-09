const addFriends = require('../model/addfriends.model')      // 引入friends模型
const {Op} = require("sequelize");     //引入user模型

class FriendsService{

    async getAddFriends ({userid, applyId}) {
        let Info = await addFriends.findOne({
            attributes: ['id', 'applyStatus'],
            where: {
                userid,
                applyId
            }
        })
        return !Info;
    }

    async addFriends ({userid, applyId, applyName, applyMes}) {
        return await addFriends.create({
            userid,
            applyId,
            applyName,
            applyMes,
            applyStatus: 0
        })
    }
}

module.exports = new FriendsService()
