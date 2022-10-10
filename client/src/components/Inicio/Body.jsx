import React from 'react'
import "./estilos.css"
import {NavLink} from 'react-router-dom'

export default function Body(){
return(
<>
<body className='Body1'>
  <div className='divTitle'>
<h2 className='title1'>¡Quizz App!</h2>
</div>
       
        
        
  <div className='container'>
        <div className='border1'>
        <NavLink className="item1" to="/Math">Matematicas Básicas</NavLink>
        </div>
        <div className='border2'>
        <NavLink className="item2" to="/Calculo">Cálculo</NavLink>
        </div>
        <div className='border1'>
        <NavLink className="item3" to="/Alge">Álgebra</NavLink>
        </div>
        <div className='border1'>
        <NavLink className="item4" to="/Trigono">TrigonometrÍa</NavLink>
        </div>
        <div className='border1'>
        <NavLink className="item5" to="/Progra">Programación</NavLink>
        </div>
        <div className='border1'>
        <NavLink className="item6" to="/Fisi">FÍsica</NavLink>
        </div>
        <div className='border1'>
        <NavLink className="item7" to="/Ingle">Inglés</NavLink>
        </div>
        <div className='border1'>
        <NavLink className="item8" to="/Compu">Computación</NavLink>
        </div>
        <div className='border1'>
        <NavLink className="item9 " to="/Compu">Estructuras de datos</NavLink>
        </div>
  </div>
{/* <a  href="/Login" className='bt-agendar' >Quizz</a>
<a  href="/Login" className='bt-agendar' >Practicar</a>
<a  href="/Login" className='bt-agendar' >examen</a> */}
   

</body>

<footer>
Todos los derechos reservados©
</footer>
</>

)}