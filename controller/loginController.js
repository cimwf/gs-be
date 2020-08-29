const Model = require('../models/model/model')

module.exports = {
    index(req,res){
        res.render('admins/login')
    },

    login(req,res){
        console.log(req.body);
        req.session.username = req.body.username
        res.redirect('/')
    },

    register(req,res){
        res.render('admins/register')
    },
    async registerFn(req,res){
        let basedata = await Model.insert(req.body)
        // res.redirect('/')
        res.send({
            status: '200',
            message: '注册成功'
        })
    },

    logout(req,res){
        delete req.session.username
        res.redirect('/admin/login')
    }
}