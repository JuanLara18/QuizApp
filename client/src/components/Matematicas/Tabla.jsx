import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mestilos.css"
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

class Nodo{
  constructor(dato = null){
      this.dato = dato;
      this.next = null;
  }

  getData(){
      return this.dato;
  }

  setData(a){
      this.dato = a;
  }

  getNext(){
      return this.next;
  }

  setNext(top){
      this.next = top;
  }
}

class Pila {
  constructor(){
      this.array = [];
      this.top = 0;
  }

  empty(){
      return this.top <= 0;
  }

  full(){
      // No hace falta definirlo, nunca se llena
      return false;
  }

  pop(){
      let r;
      if(!this.empty()){
          this.top--;
          r = this.array[this.top];;
      } else {
          throw 'La pila está vacía.'
      }
      return r;
  }

  push(a){
      this.array[this.top] = a;
      this.top++;
  }
}

class ColaRef{
  constructor(){
      this.front = null;
      this.rear = null;
  }

  empty(){
      return this.front == null;
  }

  enqueue(a){
      let newp = new Nodo(a);
      if(this.rear != null){
          this.rear.setNext(newp);      
          this.rear = this.rear.next;      
      } else {
          this.front = newp;
          this.rear = newp;
      }
  }

  dequeue(){
      let res;
      if(!this.empty()){
          res = this.front.getData();
          this.front = this.front.getNext();
      } else {
          throw 'La ColaRef está vacía';
      }
      return res;
  }
}

var datas = new Pila();
var cola = new ColaRef();


datas.enqueue({ id: 1, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:"" });
datas.enqueue({ id: 1, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:"" });
datas.enqueue({ id: 1, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:"" });
datas.enqueue({ id: 1, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:"" });

console.log(datas.top);

cola.enqueue(datas.pop());

const data = [
  { id: 1, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:"" },
  { id: 2, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:""  },
  { id: 3, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:""  },
  { id: 4, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:"" },
];

class Tabla extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Tema: "",
      pregunta: "",
      respuesta: "",
      
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].Tema = dato.Tema;
        arreglo[contador].pregunta = dato.pregunta;
        arreglo[contador].respuesta = dato.respuesta;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
          <Button color="success" className="btn-crear" onClick={()=>this.mostrarModalInsertar()}>Añadir pregunta</Button>
          <Table className="tabla1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tema</th>
                <th>Pregunta</th>
                <th>Respuesta</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Tema}</td>
                  <td>{dato.pregunta}</td>
                  <td>{dato.respuesta}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Tema: 
              </label>
              <input
                className="form-control"
                name="Tema"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Tema}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                pregunta: 
              </label>
              <input
                className="form-control"
                name="pregunta"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.pregunta}
              />
            </FormGroup>

            <FormGroup>
              <label>
                respuesta: 
              </label>
              <input
                className="form-control"
                name="respuesta"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.respuesta}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Tema</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Tema: 
              </label>
              <input
                className="form-control"
                name="Tema"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                pregunta: 
              </label>
              <input
                className="form-control"
                name="pregunta"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                respuesta: 
              </label>
              <input
                className="form-control"
                name="respuesta"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default Tabla;
