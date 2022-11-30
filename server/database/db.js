const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('../routes/routes.js')
const routes2 = require('../routes/routes2.js')
const routes3 = require('../routes/routes3.js')
const routes4 = require('../routes/routes4.js')
const routes5 = require('../routes/routes5.js')
const routes6 = require('../routes/routes6.js')
const routes7 = require('../routes/routes7.js')
const routes8 = require('../routes/routes8.js')
const routes9 = require('../routes/routes9.js')

const cors = require('cors')


const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'quizzapp'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})


app.use('/api',  routes)
app.use('/api2', routes2)
app.use('/api3', routes3)
app.use('/api4', routes4)
app.use('/api5', routes5)
app.use('/api6', routes6)
app.use('/api7', routes7)
app.use('/api8', routes8)
app.use('/api9', routes9)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})




