const { DataTypes } = require('sequelize')

const User = require('./User')
const Publication = require('./Publication')

const db = require('../db/conn')

const Comment = db.define('Comment', {
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
        require:true
    }
})

Comment.belongsTo(User)
Comment.belongsTo(Publication)

User.hasMany(Comment)
Publication.hasMany(Comment)

module.exports = Comment