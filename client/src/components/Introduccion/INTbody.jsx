import React from 'react'
import {NavLink} from 'react-router-dom'
import "./INTestilos.css"
import img1 from './img1.png'

const INTbody = () => {
  return (
    <>
   
    <div>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='title'>
      <h2 className='part1'>Siempre </h2> 
      <h2 className='part2'>entender mejor</h2>
      </div>
      
      <h3 className='title3'>los mejores estudiantes son los que más repasan</h3>
      <br/>
        <div className='divItem2'>
        <NavLink className="item2" to="/Inicio">Comienza ahora</NavLink>
        </div>
        <br/>
      <div>
      
        <p className='text1'>Creado por estudiantes para estudiantes</p>
      </div>
        
       <div className='DivImg'> 
      <img className="img1" src={img1} /> 
      </div> 
      </div>   
    </>
  )
}

export default INTbody