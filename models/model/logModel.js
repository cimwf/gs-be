const { model } = require('../conn/conn')

const Schema = require('../Schema/log')

class logModel {
    constructor(){
        this.model = model('Log',Schema)
    }

    insert(options){
        return this.model.insertMany(options)
    }
}

module.exports = new logModel