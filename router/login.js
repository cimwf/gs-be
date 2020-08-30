const express = require('express')
const { index, login, register, registerFn,logout } = require('../controller/loginController')
const { register:registerMiddleWare,login:loginMiddleWare,log } = require('../middleware/register')
const router = express.Router()

router.get('/login',index)

router.post('/login',[loginMiddleWare,log],login)

router.get('/register',register)

router.post('/register',registerMiddleWare,registerFn)

router.get('/logout',logout)

module.exports = router