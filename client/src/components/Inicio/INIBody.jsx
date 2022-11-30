import React from 'react'
import "./estilos.css"
import {NavLink} from 'react-router-dom'



export default function INIBody(){
return(
<>

<body className='Body1'>
<div className='divTitle'>
<br/>
<h2 className='title1'>Materias disponibles para estudiar</h2>
</div>
            
  <div className='container'>
        <div className='border1'>
        <NavLink className="item1" to="/Math">Matematicas Básicas</NavLink>
        <p className='parrafo'>Mátematicas basicas es una asignatura 
          compuesta por conceptos básicos 
          de las Matematicas la cual agregamos para
          fortalecer las bases.
        </p>
        <div className='divBtn'>
        <NavLink className="btn1" to="/Math">Explorar preguntas</NavLink>
        </div>
        
        </div>
        <div className='border2'>
        <NavLink className="item20" to="/Calculo">Cálculo</NavLink>
        <p className='parrafo'>Cálculo 
          es una de las asignaturas más importantes en varias carreras
          puesto que esta ayuda a desarrollar la logica y hallar el por qué
          en diferentes problemas.
        </p>
        <div className='divBtn'>
        <NavLink className="btn2" to="/Calculo">Explorar preguntas</NavLink>
        </div>
        
        </div>
        <div className='border3'>
        <NavLink className="item3" to="/Alge">Álgebra</NavLink>
        <p className='parrafo'>Álgebra lineal es una asignatura 
        que enseña acerca de espacios vectoriales, matrices, determinantes 
        y otros temas importantes.
        </p>
        <div className='divBtn'>
        <NavLink className="btn3" to="/Alge">Explorar preguntas</NavLink>
        </div>
        </div>

        <div className='border4'>
        <NavLink className="item4" to="/Trigono">TrigonometrÍa</NavLink>
        <p className='parrafo'>La trigonometría es una rama de la matemática cuyo significado etimológico es 'la medición de los triángulos'
        </p>
        <div className='divBtn'>
        <NavLink className="btn4" to="/Trigono">Explorar preguntas</NavLink>
        </div>
        </div>

        <div className='border5'>
        <NavLink className="item5" to="/Progra">Programación</NavLink>
        <p className='parrafo'>La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como realizar algún tipo de tarea. Pero no solo la acción de escribir un código para que la computadora o el software lo ejecute.
        </p>
        <div className='divBtn'>
        <NavLink className="btn5" to="/Progra">Explorar preguntas</NavLink>
        </div>
        </div>

        <div className='border6'>
        <NavLink className="item6" to="/Fisi">FÍsica</NavLink>
        <p className='parrafo'>La física ​ es la ciencia natural que estudia los componentes fundamentales del Universo. Estudia también la energía, la materia, la fuerza, el movimiento, el espacio-tiempo, las magnitudes físicas, las propiedades físicas y las interacciones fundamentales
        </p>
        <div className='divBtn'>
        <NavLink className="btn6" to="/Fisi">Explorar preguntas</NavLink>
        </div>
        </div>

        <div className='border7'>
        <NavLink className="item7" to="/Ingle">Inglés</NavLink>
        <p className='parrafo'>El idioma inglés es una lengua germánica occidental perteneciente a la familia de lenguas indoeuropeas, que surgió en los reinos anglosajones de Inglaterra y se extendió hasta el Norte 
        </p>
        <div className='divBtn'>
        <NavLink className="btn7" to="/Ingle">Explorar preguntas</NavLink>
        </div>
        </div>

        <div className='border8'>
        <NavLink className="item8" to="/Compu">Computación</NavLink>
        <p className='parrafo'>La computación abarca el estudio científico del diseño, conformación y operación de las computadoras,
        </p>
        <div className='divBtn'>
        <NavLink className="btn8" to="/Compu">Explorar preguntas</NavLink>
        </div>
        </div>

        <div className='border9'>
        <NavLink className="item9 " to="/ES">Estructuras de datos</NavLink>
        <p className='parrafo'>Las estructuras de datos en programación son un modo de representar información en una computadora, aunque además, cuentan con un comportamiento interno.
        </p>
        <div className='divBtn'>
        <NavLink className="btn9" to="/ES">Explorar preguntas</NavLink>
        </div>
        </div>
  </div>

</body>

<footer>
Todos los derechos reservados©
</footer>
</>

)}