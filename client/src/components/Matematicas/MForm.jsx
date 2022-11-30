import React from 'react';
import "../Algebra/Aestilos.css"
import {NavLink} from 'react-router-dom'
import "../Algebra/Aestilos.css"

const MForm = ({dato, setDato}) => {

    const handleChange = e => {
        setDato({
            ...dato,
            [e.target.name]: e.target.value
        })
    }

    let{Tema, Descripcion, respuestas, respuesta_correcta, Puntaje} = dato

    const handleSubmit = () => {
     
        //validación de los datos
        if (Tema === '' || Descripcion === '' || respuestas  === ''|| respuesta_correcta  === ''|| Puntaje==='' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dato)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setDato({
            Tema: '',
            Descripcion: '',
            respuestas:'' ,
            respuesta_correcta: '',
            Puntaje:''
        })



    }

    return ( 
        <form className="form1" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Tema" className="label_tema">Tema</label>
                <input value={Tema} name="Tema" onChange={handleChange} type="text" id="Tema" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Descripcion" className="label_tema">Descripción</label>
                <input value={Descripcion} name="Descripcion" onChange={handleChange} type="text" id="Decripcion" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="respuestas" className="label_tema">Respuestas</label>
                <input value={respuestas}  name="respuestas" onChange={handleChange} type="text" id="respuestas" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="respuesta_correcta" className="label_tema">Respuesta correcta</label>
                <input value={respuesta_correcta}  name="respuesta_correcta" onChange={handleChange} type="text" id="respuesta_correcta" className="form-control"/>
            
            </div>
            <div className="mb-3">
                <label htmlFor="Puntaje" className="label_tema">Puntaje</label>
                <input value={Puntaje}  name="Puntaje" onChange={handleChange} type="text" id="Puntaje" className="form-control"/>
            
            </div>
     

            <div className='divStart'>


            <NavLink className="start" to="/p5"><span className="material-symbols-outlined">play_arrow</span>Iniciar repaso</NavLink>
    
            <button type="submit" className="btn añadir">Añadir pregunta</button>
            </div>
            
            
        </form>
        

               
    );
}
 
export default MForm;