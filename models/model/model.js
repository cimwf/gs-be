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
}

module.exports = new userModel