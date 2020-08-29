// const layer = require('../public/js/plugins/layer/layer.min.js')
const Model = require('../models/model/model')

module.exports = {

    //注册接口中间件
    async register(req,res,next){
        console.log(req.body);
        let isUser = await Model.checkUser(req.body.username)
        console.log(isUser.length);
        if(isUser.length === 0){
            next()
        }else{
            res.send({
                status: '404',
                message: '该用户已存在'
            })
        }
    },


    async login(req,res,next){
        console.log(req.body);
        let isUser = await Model.checkUser(req.body.username)
        console.log(isUser);
        if(isUser.length === 0){
            res.redirect('/admin/login?code=0')
        }else{
            if(isUser[0].password == req.body.password){
                req.session.username = isUser[0].username
                next()
            }else{
                res.redirect('/admin/login?code=1')
            }
        }
    }
}