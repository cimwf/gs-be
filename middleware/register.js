// const layer = require('../public/js/plugins/layer/layer.min.js')
const Model = require('../models/model/model')
const logModel = require('../models/model/logModel')

const { formatDate, fullUrl } = require('../utils/utils')

//添加限制，并存储错误时间
const addLimit = async (req,res,userData)=>{

   
    let newDate = formatDate().slice(0,10) //现在错误的时间
    let oldDate = userData.loginDate.slice(0,10)//记录的时间
    //判断是否为一天
    if(newDate !== oldDate){//不是一天
        //让limit为1，因为已错了一次
        await Model.updateLimit(req.body.username)
    }else{//同一天
        if(userData.limit === 3){
            //记录时间
            await Model.updateData(userData._id,{loginDate:formatDate()})
        }else{
            //limit+1
            res.redirect('/admin/login?code=1')
            await Model.updateLimit(req.body.username)
        }
    }

}

//判断是否过了三次限制
const isLimit = (req,res,next,userData) => {

    if(userData.limit === 3){
        console.log('----------');
        res.redirect('/admin/login?code=2')
    }else{
        req.session.username = isUser[0].username
        next()
    }
    
}

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

    // async updateDataPost(req,res,next){
    //     console.log(req.body);
    //     let isUser = await Model.checkUser(req.body.username)
    //     console.log(isUser.length);
    //     if(isUser.length !== 0){
    //         next()
    //     }else{
    //         res.send({
    //             status: '404',
    //             message: '该用户已存在'
    //         })
    //     }
    // },


    async login(req,res,next){
        console.log(req.body);
        let isUser = (await Model.checkUser(req.body.username))[0]
        console.log(isUser);
        // let userData = await Model.checkUser(req.body.username)[0]
        // console.log(userData);
        if(!isUser){
            //用户不存在
            res.redirect('/admin/login?code=0')
        }else{
            // isLimit(req,res,next,isUser)
            if(isUser.limit === 3){
                res.redirect('/admin/login?code=2')
            }

            if(isUser.password == req.body.password){
                // isLimit(req,res,next,isUser)
                req.session.username = isUser.username
                next()
            }else{
                //密码错误之后添加限制
                //判断limit是否为3
                addLimit(req,res,isUser)
            }
        }
    },


    async log(req,res,next){
        let options = {
            username: req.body.username,
            userIp: req.ip,
            loginDate: formatDate(),
            reqMethod: req.method,
            userURL: fullUrl(req),
            userAgain: req.headers['user-agent']
        }

        await logModel.insert(options)
        next()
    },


    
}