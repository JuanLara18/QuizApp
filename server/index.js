const express = require ('express')
const dotenv = require('dotenv');
const cookieParser= require ('cookie-Parser');


const app = express();
//para trabajar con las cookies
app.set('view engine','ejs')
//Usamos la carpeta public de los archivos
app.use(express.static('public'))
// seteamos urlencoded para procesar los datos del formulario y así no tener errores
app.use(express.urlencoded({extended: true}))
app.use(express.json());
//invocamos a dotenv
dotenv.config({path:'./sever/env/.env'});
//Trabajar con las coojies
app.use(cookieParser())
//llamara al router
app.use('/',require('./routes/router'))

// para borrar cache
app.use(function(req,res,next){
    if(!req.user)
    res.header('Cache-Control','private, no-cache, no-store, must-revalidate');
    next();
});

app.get('/',(req,res)=>{
    res.render('./views/index.ejs');
})

app.listen(3308,()=>{
    console.log('SERVER RUNNING IN http://localhost:3308');
})

