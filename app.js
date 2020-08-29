const express = require('express')
const loginRouter = require('./router/login')
const indexRouter = require('./router')
const artTemplate = require('express-art-template')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieSession({
    name: 'sessionId',
    secret: 'abcdefg',
    maxAge: 20*60*1000
}))



app.use('/admin',loginRouter)
app.use(indexRouter)

app.engine('html',artTemplate)
app.set('view engine','html')


app.listen(3000,()=>{
    console.log('3000端口的后台服务系统已经启动');
})