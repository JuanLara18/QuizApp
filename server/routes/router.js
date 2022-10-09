const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

//const conexion = require('../database/db.js')


//router para la vistas
router.get('/',authController.isAuthenticated ,(req,res)=>{
    res.render('index', {user:req.user})
})

router.get('/login',(req,res)=>{
    res.render('login',{alert:false})
})

router.post('/login',authController.login)
router.get('/logout',authController.logout)

module.exports = router