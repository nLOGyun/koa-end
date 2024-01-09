const {DataTypes} = require('sequelize')
const seq = require('../db/sql')
// username password 为表的字段
const User = seq.define('baobei_addFriends', {
    userid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户id'
    },
    applyId: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '申请人id'
    },
    applyName: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '申请人姓名'
    },
    applyMes: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '留言'
    },
    applyStatus: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '状态'
    }
})

User.sync()

module.exports = User
