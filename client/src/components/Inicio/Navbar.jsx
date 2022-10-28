import {NavLink} from 'react-router-dom'
import React from 'react'
import "./estilos.css"
import logo from "./logoProp.png"


export default function Navbar () {
    return (

<div>

<nav className="navbar navbar-expand-lg  navbar-light ">
  <div className="container-fluid">
  <a className="navbar-brand"><img alt="" src={logo} width="40px" height="40px" /></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="navlink" to="/Introduccion">Inicio</NavLink>
        </li>

        {/* <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/>djfsd </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> */}

        <li className="nav-item">
        <NavLink className="navlink" to="/Info">¿Quiénes somos</NavLink>
        </li>
        <li className="nav-item">
        <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Buscar por tema" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>

       
        </li>
      </ul>
    </div>
  </div>
</nav>








</div>
    )
}


