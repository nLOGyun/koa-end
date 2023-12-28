const {DataTypes} = require('sequelize')
const seq = require('../db/sql')
// username password 为表的字段
const User = seq.define('baobei_friends', {
    userid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户id'
    },
    friendsId: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '朋友id'
    }
})

User.sync()

module.exports = User
