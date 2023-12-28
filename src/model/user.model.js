const {DataTypes} = require('sequelize')
const seq = require('../db/sql')
// username password 为表的字段
const User = seq.define('baobei_user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一'
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '密码'
    }
})

User.sync()

module.exports = User
