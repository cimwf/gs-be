const express = require('express')
const { index, tableGet, tablePost,fromInput,updateData,updateDataPost,deleteUser } = require('../controller/indexController')
const { register } = require('../middleware/register')

const { deleteUser: deleteUserMiddleware} = require('../middleware/index')
const router = express.Router()

router.get('/',index)

router.get('/table',tableGet)

router.post('/table',tablePost)

router.get('/form',(req,res)=>{
    res.render('alert/form')
})

router.post('/formInput',register,fromInput)

router.get('/updateData',updateData)

router.post('/updateData',updateDataPost)

router.get('/deleteUser',deleteUserMiddleware,deleteUser)




module.exports = router