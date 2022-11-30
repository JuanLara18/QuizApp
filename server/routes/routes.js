const express = require('express')
const routes = express.Router()


//ruta obtener matematicas básicas

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM datos ', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})





//RUTAS POST

//post matematicas
routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO datos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('!')
        })
    })
})

///RUTAS DE BORRADO

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM datos WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('bien')
        })
    })
})



//RUTAS DE ACTUALIZACIÓN

//Matematicas
routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE datos set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('updated!')
        })
    })
})




module.exports = routes
































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

