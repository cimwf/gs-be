const model = require('../models/model/model')

module.exports ={
    index(req,res){
        if(req.session.username){
            res.render('index',{username:req.session.username})
        }else{
            res.redirect('/admin/login')
        } 
    },

    async tablePost(req,res){
        var baseData = await model.showList()
        var arr = baseData.map((v,i)=>{
 
            return {
                v,
                index: i+1
            }
        })

        // console.log(arr);
        res.send(arr)
    },

    tableGet(req,res){

        res.render('admins/tables')
    },

    async fromInput(req,res){
        console.log(req.body);
        await model.insert(req.body)
        res.send({
            status: 200,
            message: 'success'
        })
    },

    async updateData(req,res){
        console.log(req.query.username);
        let data = await model.checkUser(req.query.username)

        res.send(data)
    },

    async updateDataPost(req,res){
        console.log(req.body);
        let userData = await model.updateData(req.body._id,req.body)
        console.log(userData);
        res.send({
            status: 200,
            message: 'success'
        })
    },



    async deleteUser(req,res){
        await model.deleteUser(req.query.username)
        res.send({
            status: 200,
            message: '删除成功'
        })
    }
}