
import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import "./INTestilos.css"
import img1 from './img1.png'
import Navbar from "../Inicio/Navbar.jsx"

var Queue=require('js-queue');

export default function INTbody ({}) {

//datos 1
  const [datos, setDatos] = useState([])
  const [listUpdated, setListUpdated] = useState(false)
//datos 2
const [datos2, setDatos2] = useState([])
const [listUpdated2, setListUpdated2] = useState(false)
//datos 3
const [datos3, setDatos3] = useState([])
const [listUpdated3, setListUpdated3] = useState(false)
//datos 4
const [datos4, setDatos4] = useState([])
const [listUpdated4, setListUpdated4] = useState(false)
//datos 5
const [datos5, setDatos5] = useState([])
const [listUpdated5, setListUpdated5] = useState(false)
//datos 6
const [datos6, setDatos6] = useState([])
const [listUpdated6, setListUpdated6] = useState(false)
//datos 7
const [datos7, setDatos7] = useState([])
const [listUpdated7, setListUpdated7] = useState(false)



  //petición de datos
  //tabla1
  useEffect(() =>{
  const getDatos = ()=>{
  fetch('http://localhost:9000/api')
  .then(response => response.json())
  // .then(response => console.log(response))
  .then(response => setDatos(response))
  }
  getDatos()
  
  setListUpdated(false)
  }, [listUpdated])

  
  //tabla 2
  useEffect(() =>{
    const getDatos2 = ()=>{
    fetch('http://localhost:9000/api2')
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => setDatos2(response))
    }
    getDatos2()
    
    setListUpdated2(false)
    }, [listUpdated2])

 //tabla 3
 useEffect(() =>{
  const getDatos3 = ()=>{
  fetch('http://localhost:9000/api3')
  .then(response => response.json())
  // .then(response => console.log(response))
  .then(response => setDatos3(response))
  }
  getDatos3()
  
  setListUpdated3(false)
  }, [listUpdated3])

   //tabla 4
   useEffect(() =>{
    const getDatos4 = ()=>{
    fetch('http://localhost:9000/api4')
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => setDatos4(response))
    }
    getDatos4()
    
    setListUpdated4(false)
    }, [listUpdated4])

     //tabla 5
  useEffect(() =>{
    const getDatos5 = ()=>{
    fetch('http://localhost:9000/api5')
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => setDatos5(response))
    }
    getDatos5()
    
    setListUpdated5(false)
    }, [listUpdated5])

     //tabla 6
  useEffect(() =>{
    const getDatos6 = ()=>{
    fetch('http://localhost:9000/api6')
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => setDatos6(response))
    }
    getDatos6()
    
    setListUpdated6(false)
    }, [listUpdated6])


    // console.log(datos,datos2,datos3,datos4,datos5,datos6,datos7)
     let datosCompletos = [datos,datos2,datos3,datos4,datos5,datos6]
    console.log(datosCompletos)
  //   var datosCompletos = [ 
  //     [ 
  //         {id: 1, Tema: "prueba"},  
  //         {id: 2, Tema: "prueba2"} 
  //     ],  
  //     [ 
  //         {id: 20, Tema: "prueba21"}, 
  //         {id: 23, Tema: "prueba222"}, 
  //         {id: 23, Tema: "esteno222"} 
  //     ] 
  // ]; 
   
  // ------------------------------------------------------- 
  class Graph { 
      // defining vertex array and 
      // adjacent list 
      constructor(noOfVertices) 
      { 
          this.noOfVertices = noOfVertices; 
          this.AdjList = new Map(); 
      } 
    
      addVertex(v) 
  { 
      // initialize the adjacent list with a null array 
      this.AdjList.set(v, []); 
  } 
  addEdge(v, w) 
  { 
      // get the list for vertex v and put the 
      // vertex w denoting edge between v and w 
      this.AdjList.get(v).push(w); 
    
      // Since graph is undirected, 
      // add an edge from w to v also 
      this.AdjList.get(w).push(v); 
  } 
  printGraph() 
  { 
      // get all the vertices 
      var get_keys = this.AdjList.keys(); 
    
      // iterate over the vertices 
      for (var i of get_keys) 
  { 
          // great the corresponding adjacency list 
          // for the vertex 
          var get_values = this.AdjList.get(i); 
          var conc = ""; 
    
          // iterate over the adjacency list 
          // concatenate the values into a string 
          for (var j of get_values) 
              conc += j + " "; 
    
          // print the vertex and its adjacency list 
          console.log(i + " -> " + conc); 
      } 
  } 
  bfs(startingNode) 
  { 
      // Create a visited object 
      var visited = {}; 
    
      // Create an object for queue 
      var q = new Queue(); 
    
      // add the starting node to the queue 
      visited[startingNode] = true; 
      q.enqueue(startingNode); 
    
      // loop until queue is empty 
      while (!q.isEmpty()) { 
          // get the element from the queue 
          var getQueueElement = q.dequeue(); 
    
          // passing the current vertex to callback function 
          // console.log(getQueueElement); 
          arreglo.push(getQueueElement); 
    
          // get the adjacent list for current vertex 
          var get_List = this.AdjList.get(getQueueElement); 
    
          // loop through the list and add the element to the 
          // queue if it is not processed yet 
          for (var i in get_List) { 
              var neigh = get_List[i]; 
    
              if (!visited[neigh]) { 
                  visited[neigh] = true; 
                  q.enqueue(neigh); 
              } 
          } 
      } 
  } 
   
  dfs(startingNode) 
  { 
    
      var visited = {}; 
    
      this.DFSUtil(startingNode, visited); 
  } 
   
  DFSUtil(vert, visited) 
  { 
      visited[vert] = true; 
      // console.log(vert); 
      arreglo.push(vert); 
    
      var get_neighbours = this.AdjList.get(vert); 
    
      for (var i in get_neighbours) { 
          var get_elem = get_neighbours[i]; 
          if (!visited[get_elem]) 
              this.DFSUtil(get_elem, visited); 
      } 
  } 
  } 

  // Function to find subtrings 
  function Sub(texto1, texto2){ // Del texto1 en texto2 
      const stringMap = new Map() 
      for (let char of texto1) { 
          stringMap[char] = true 
      } 
      let resultString = '' 
      for(let char of texto2){ 
          if(stringMap[char]){ 
              resultString += char; 
          } 
      } 
      return resultString.length >= texto1.length ? true : false 
  } 
  var arreglo = [] 
   
  // --------------------------------------------------- 
   
  // Create the graph 
  var graph = new Graph(); 
  let Vertex = ["Matemáticas básicas", "Cálculo", "Álgebra", "Trigonometría", "Programación", "Física"]; 
   
   
  // Adding the vertex and edges 
  graph.addVertex("Materias"); 
  Vertex.forEach(element => { 
      graph.addVertex(element) 
      graph.addEdge("Materias", element) 
  }); 
   
   
  // -------------------------------------------------- 
   
  function FindT(search, Array) { // Input: "text", datosCompletos 
   
      let l = []; 
   
      for (let j = 0; j < Array.length; j++) { 
          for (let i = 0; i < Array[j].length; i++) { 
              const ask = Array[j][i]; 
              if(Object.keys(ask).length == 0){ 
                  continue; 
              } 
              // id , Tema , i 
              let n = ask["id"] + "," + ask["Tema"] + "," + i.toString(); 
              graph.addVertex(n); 
              graph.addEdge(n, Vertex[i]) 
          } 
      } 
   
      graph.dfs("Materias"); // Fill the arreglo 
   
      arreglo.forEach(element => { 
          if(Sub(search, "," + element + ",")){ 
              let part = element.split(","); 
              let resp = "En " + Vertex[parseInt(part[2])] + ", el tema: " + part[1] + ", con id: " + part[0] +" \n "; 
              if(part[1] != undefined){ 
                  l.push(resp) 
              } 
               
          } 
      }); 
   
      return l 
  } 
   
  console.log(FindT("este", datosCompletos))



  const searcher = (e) => {
    setSearch(e.target.value)   
}
const [ search, setSearch ] = useState("")



console.log(search)
console.log(FindT(search,datosCompletos))
// alert(FindT(search,datosCompletos))
let impresion = FindT(search,datosCompletos) 


const porfin = ()=>{
alert(impresion)
}

return (
    <>
    <Navbar search={search} searcher={searcher} porfin={porfin}  /> 
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



