const express = require('express')
const routes7 = express.Router()

//ruta obtener matematicas básicas
routes7.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM ingles', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//RUTAS POST
//post matematicas
routes7.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO ingles set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('!')
        })
    })
})

///RUTAS DE BORRADO

routes7.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM ingles WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('bien')
        })
    })
})



//RUTAS DE ACTUALIZACIÓN

//Matematicas
routes7.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE ingles set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('updated!')
        })
    })
})




module.exports = routes7
































//rutas usuarios login

//const conexion = require('../database/db.js')

//router para la vistas
// router.get('/',authController.isAuthenticated ,(req,res)=>{
//     res.render('index', {user:req.user})
// })

// router.get('/login',(req,res)=>{
//     res.render('login',{alert:false})
// })

// router.post('/login',authController.login)
// router.get('/logout',authController.logout)

