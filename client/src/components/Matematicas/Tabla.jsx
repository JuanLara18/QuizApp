import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Algebra/Aestilos.css"

const Tabla = ({dato, setDato, datos, setListUpdated}) => {
const handleDelete = id => {
const requestInit = {

    //método de borrar
    method: 'DELETE'
}
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(response => response.text())
        .then(response => console.log(response))
        setListUpdated(true)
    }

    //método de actualizar

    let {Tema, Descripcion, respuestas, respuesta_correcta,Puntaje} = dato
    const handleUpdate = id => {
        //validación de los datos
        if (Tema === '' || Descripcion === '' || respuestas === ''|| respuesta_correcta === ''||Puntaje==='') {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dato)
        }

        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(response => response.text())
        .then(response => console.log(response))

        //reiniciando state
        setDato({
          Tema: '',
          Descripcion: '',
          respuestas:'' ,
          respuesta_correcta: '',
          Puntaje:''
        })
        setListUpdated(true)
    }






    


    return ( 
        <>
        <table className="table table-striped table-hover shadow-lg">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tema</th>
                    <th>Descripción</th>
                    <th>Respuestas</th>
                    <th>respuesta_correcta</th>
                    <th>Puntaje</th>
                </tr>
            </thead>
            <tbody>
        
                {datos.map(dato => (
                    <tr key={dato.id}>
                        
                        <td>{dato.id}</td>
                        <td>{dato.Tema}</td>
                        <td>{dato.Descripcion}</td>
                        <td>{dato.respuestas}</td>
                        <td>{dato.respuesta_correcta}</td>
                        <td>{dato.Puntaje}</td>
                        <td>
                            <div className="m">
                                <button onClick={() => handleDelete(dato.id)} className="btn btn-danger">Eliminar</button>
                            </div>
                            <div className="m">
                                <br />
                                <button onClick={() => handleUpdate(dato.id)} className="btn actualizar">Actualizar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    
{/* 
    <script>
    var elemento  = document.getElementById("flexRadioDefault1")
    console.log(elemento.value) 
    </script>

<div>
<h2>{}</h2>
    <form className="d-flex" >
      <input className="form-control me-2" type="text" placeholder="seleccionar" aria-label="Search"/>
    </form>
<h2>Respuestas</h2>
    <form className="d-flex" >
      <input className="form-control me-2" type="text" placeholder="seleccionar" aria-label="Search"/>
    </form>

<h2>Respuesta correcta</h2>
    <form className="d-flex">
      <input className="form-control me-2" type="text" placeholder="seleccionar" aria-label="Search"/>
    </form>
</div> */}
    
        </>
    );



}




 
export default Tabla;