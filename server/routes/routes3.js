const express = require('express')
const routes3 = express.Router()


//ruta obtener matematicas básicas

routes3.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM algebra', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})





//RUTAS POST

//post matematicas
routes3.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO algebra set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('!')
        })
    })
})

///RUTAS DE BORRADO

routes3.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM algebra WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('bien')
        })
    })
})



//RUTAS DE ACTUALIZACIÓN

//Matematicas
routes3.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE algebra set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('updated!')
        })
    })
})




module.exports = routes3
































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

