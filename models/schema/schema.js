const { Schema } = require('../conn/conn')

module.exports = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 2
    },
    password: {
        type: String,
        required: true,
        minlength: 2
    },
    //昵称
    nickname: {
        type: String,
        default: null,
    },
    number: {
        type: Number,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    //爱好
    hobby: {
        type: String,
        default: '没有爱好一律按照喜欢吃屎来算',
    },
    //简介
    brief: {
        type: String,
        default: '这个家伙很懒，什么也没有留下',
    },
})