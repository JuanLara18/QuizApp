const express = require('express')
const routes4 = express.Router()


//ruta obtener matematicas básicas

routes4.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM programacion', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})





//RUTAS POST

//post matematicas
routes4.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO programacion set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('!')
        })
    })
})

///RUTAS DE BORRADO

routes4.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM programacion WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('bien')
        })
    })
})



//RUTAS DE ACTUALIZACIÓN

//Matematicas
routes4.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE programacion set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('updated!')
        })
    })
})




module.exports = routes4
































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

