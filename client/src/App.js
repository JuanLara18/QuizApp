import React from 'react'
import Inicio from "./pages/Inicio"
import Info from "./pages/Info"
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import Matematicas from './pages/Matematicas'
import Calculo from './pages/Calculo'
import Algebra from './pages/Algebra'
import Trigonometria from './pages/Trigonometria'
import Programacion from './pages/Programacion'


export default function App(){
return(
<BrowserRouter>
<Routes>
<Route path="/" element ={<Inicio/>} />
<Route path="/Inicio" element ={<Inicio/>} />
<Route path="/Info" element ={<Info/>} />
<Route path="/*" element ={<NotFoundPage/>} />

<Route path="/Math" element ={<Matematicas/>} />
<Route path="/Cal" element ={<Calculo/>} />
<Route path="/Alge" element ={<Algebra/>} />
<Route path="/Trigono" element ={<Trigonometria/>} />
<Route path="/Progra" element ={<Programacion/>} />

</Routes>
</BrowserRouter>
)
}
/*
const [conectado, setConectado] = useState(false);

const acceder = (estado)=> {
    conectado(estado)
}
*/

//conectado ? <Menu/>: <Login acceder={acceder}/>
