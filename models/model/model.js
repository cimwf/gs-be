const { model } = require('../conn/conn')

const Schema = require('../schema/schema')

class userModel {
    constructor(){
        this.model = model('User',Schema)
    }

    insert(options){
        return this.model.insertMany(options)
    }
    //查找用户
    checkUser(username){
        return this.model.find({username})
    }

    //列表展示
    showList(){
        return this.model.find()
    }

    //用户修改

    updateData(_id,options){
        return this.model.updateMany({_id},{$set: options})
    }

    //limit+1
    updateLimit(username){
        return this.model.updateMany({username},{$inc: {limit:1}})
    }
    //将limit归1
    refreshLimit(username){
        return this.model.updateMany({username},{$set: {limit:0}})
    }

    //删除用户
    deleteUser(username){
        return this.model.deleteOne({username})
    }

    
}

module.exports = new userModel