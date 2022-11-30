import React, {Fragment, useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ATabla from './ATabla'
import AForm from './AForm'
import ANavbar from './ANavbar'
import {NavLink} from 'react-router-dom'

export default function ABody(){

  const [dato, setDato] = useState({
    Tema: '',
    Descripcion: '',
    respuestas:'' ,
    respuesta_correcta: '',
    Puntaje: ''
  })

const [datos, setDatos] = useState([])
const [listUpdated, setListUpdated] = useState(false)


//petición de datos
useEffect(() =>{
const getDatos = ()=>{
fetch('http://localhost:9000/api3')
.then(response => response.json())
// .then(response => console.log(response))
.then(response => setDatos(response))
}
getDatos()

setListUpdated(false)
}, [listUpdated])
//agregar: 
//funciona




const searcher = (e) => {
  setSearch(e.target.value)   
}
//    //metodo de filtrado 2  

const [ search, setSearch ] = useState("")


const results = !search ? datos : datos.filter((dato)=> dato.Tema.toLowerCase().includes(search.toLocaleLowerCase()))





return (
<>
<ANavbar datos={datos} search={search} searcher={searcher}  dato={dato} setDato={setDato} setListUpdated={setListUpdated}/>
<body>
<h2 className='title2'>Álgebra</h2>
<Fragment>

 <div className="container">
        <div className="row ">
          <div className="col-7">
        
              <h2 className='lista'>Lista de preguntas</h2>
               <ATabla  datos={results}   dato={dato} setDato={setDato} setListUpdated={setListUpdated}/>
</div>

<div className="col-5">
             <br/>
             <br/>
            <AForm dato={dato} setDato={setDato}/> 
          </div>
        </div>
      </div>
    </Fragment>
  

   
{/* botones */}


{/* <div className='divStart'>
        <NavLink className="start" to="/Inicio"><span className="material-symbols-outlined">
play_arrow
</span>Iniciar repaso</NavLink>
</div> */}
</body> 
</>
  )
}