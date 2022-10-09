import React from 'react'
import "./Mestilos.css"
import {NavLink} from 'react-router-dom'

export default function Mbody(){
  return (
<>
<body>
<h2 className='title2'>Matematicas básicas</h2>
<div className='divListo'>
<h3 className='Listo'>¿Está todo listo?</h3>
</div>

  
<div className='divStart'>
<button className='start'>Start quiz</button>
</div>
</body>
</>
  )
}

