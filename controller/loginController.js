const Model = require('../models/model/model')
const { formatDate } = require('../utils/utils')

module.exports = {
    index(req,res){
        res.render('admins/login')
    },

    async login(req,res){
        console.log(req.body);
        req.session.username = req.body.username
        // await logModel.insert()
        res.redirect('/')
    },

    register(req,res){
        res.render('admins/register')
    },
    async registerFn(req,res){
        let basedata = {
            ...req.body,
            loginDate: formatDate()
        }

        await Model.insert(basedata)
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