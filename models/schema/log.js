const { Schema } = require('../conn/conn')


module.exports = new Schema({
    username: String,
    userIp: String,
    loginDate: String,
    reqMethod: String,
    userURL: String,
    userAgain: String
})