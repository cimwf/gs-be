const Model = require('../models/model/model')
module.exports = {
    async deleteUser(req,res,next){
        let isUser = await Model.checkUser(req.query.username)
        console.log(isUser);
        if(isUser.length !== 0){
            next()
        }else{
            res.send({
                status: '404',
                message: '该用户不存在'
            })
        }
    }
}