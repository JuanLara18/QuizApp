import {NavLink} from 'react-router-dom'
import React from 'react'
import "./estilos.css"



export default function Navbar () {
    return (
<div>
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
  <a className="navbar-brand"><img alt="" src="Inicio/Quizz.png" /></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="navlink" to="/inicio">Inicio</NavLink>
        </li>
  
        <li className="nav-item">
        <NavLink className="navlink" to="/Info">Acerca de nosotros</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}


