const data = [
    { id: 1, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:"" },
    { id: 2, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:""  },
    { id: 3, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:""  },
    { id: 4, Tema: "Conjuntos", pregunta: "Union entre a y b", respuesta:"" },
  ];
  
  class Tabla {
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

    setState(algo){
        if(algo.data != null){
          this.state.data = algo.data
        }
        if(algo.modalActualizar != null){
          this.state.modalActualizar = algo.modalActualizar
        }
        if(algo.modalInsertar != null){
          this.state.modalInsertar = algo.modalInsertar
        }
        if(algo.form != null){
            if(algo.form.id != null){
                this.state.form.id = algo.form.id
            }
            if(algo.form.Tema != null){
                this.state.form.id = algo.form.id
            }
            if(algo.form.pregunta != null){
                this.state.form.id = algo.form.id
            }
            if(algo.form.respuesta != null){
                this.state.form.id = algo.form.id
            }
        }
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
      //var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
      if (true) {
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
  }

var tabla = new Tabla();

var Tiempos = [];
var Tiempo_Insertar = [];
var Tiempo_Eliminar = [];
var Tiempo_Editar = [];
var Tiempo_Editar2 = [];

for (let j = 10; j < 10000001; j*=10) {
    // Para insertar
    var t0 = Date.now();
    tabla = new Tabla();
    for (let i = 0; i < j; i++) {
        tabla.insertar()   
    }
    var t1 = Date.now();

    var tiempo = t1 - t0;

    Tiempos.push(j) // En general
    Tiempo_Insertar.push(tiempo)
    
}

// Para 100 millones se rompe
// var t0 = Date.now();
//     tabla = new Tabla();
//     for (let i = 0; i < 100000000; i++) {
//         tabla.insertar()   
//     }
//     var t1 = Date.now();

//     var tiempo = t1 - t0;

//     Tiempos.push(j)
//     Tiempo_Insertar.push(tiempo) 

console.log("Los n: ", Tiempos)
console.log("Tiempos de insertar: ", Tiempo_Insertar)

for (let j = 10; j < 10001; j*=10) {
    // Para eliminar
    tabla = new Tabla();
    for (let i = 0; i < j; i++) {
        tabla.insertar()   
    }
    var t0 = Date.now();
    for (let i = 1; i <= j; i++) {
        tabla.eliminar({id: i}) 
    }
    var t1 = Date.now();

    var tiempo = t1 - t0;

    Tiempo_Eliminar.push(tiempo)
}

console.log("Tiempos de eliminar: ",Tiempo_Eliminar)

for (let j = 10; j < 100000001; j*=10) {
    // Para editar
    tabla = new Tabla();
    for (let i = 0; i < j/2; i++) {
        tabla.insertar()   
    }
    var t0 = Date.now();
    for (let i = 1; i <= j; i++) {
        tabla.editar({id: Math.floor(j/2)}) 
    }
    var t1 = Date.now();

    var tiempo = t1 - t0;

    console.log(tiempo)
    Tiempo_Editar.push(tiempo)
}

console.log("Tiempos de editar: ", Tiempo_Editar)

for (let j = 10; j < 100000001; j*=10) {
    // Para editar
    tabla = new Tabla();
    for (let i = 0; i < j/2; i++) {
        tabla.insertar()   
    }
    var t0 = Date.now();
    for (let i = 1; i <= j; i++) {
        tabla.editar({id: Math.floor(j/2)}) 
    }
    var t1 = Date.now();

    var tiempo = t1 - t0;

    console.log(tiempo)
    Tiempo_Editar.push(tiempo)
}

console.log("Tiempos de editar: ", Tiempo_Editar2)
