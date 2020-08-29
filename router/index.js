const express = require('express')
const { index, tableGet, tablePost,fromInput,updateData,updateDataPost } = require('../controller/indexController')
const { register } = require('../middleware/register')
const router = express.Router()

router.get('/',index)

router.get('/table',tableGet)

router.post('/table',tablePost)

router.get('/form',(req,res)=>{
    res.render('alert/form')
})

router.post('/formInput',register,fromInput)

router.get('/updateData',updateData)

router.post('/updateData',register,updateDataPost)




module.exports = router