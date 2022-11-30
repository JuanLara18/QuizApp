// Input: [{id: 1, Tema: }, {}, {}, {}]
// Output: [[Nombre, tema, id], ... ,  [Nombre, tema, id]]
var datosCompletos = [
    [
        {id: 1, Tema: "prueba"}, 
        {id: 2, Tema: "prueba2"}
    ], 
    [
        {id: 20, Tema: "prueba21"},
        {id: 23, Tema: "prueba222"},
        {id: 23, Tema: "esteno222"}
    ]
];

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

    l = [];

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
            let resp = "En " + Vertex[parseInt(part[2])] + ", el tema: " + part[1] + ", con id: " + part[0];
            if(part[1] != undefined){
                l.push(resp)
            }
            
        }
    });

    return l
}

// Tomamos los tiempos 
var Tiempos = []; 
var Tiempo_FindT = []; 
 
for (let j = 2; j < 2501; j*=2) { 
     
    // Llenamos los datos
    var jsons = []; 
    for (let i = 0; i < j; i++) { 
        jsons.push([{id: i, tema: 1}]) ; 
    } 
 
    // Para ejecutar la función
    var t0 = Date.now(); 
    for (let i = 0; i < j; i++) { 
        arreglo = []
        var noImporta = FindT("1", jsons)
    } 
    var t1 = Date.now(); 
 
    var tiempo = t1 - t0; 
 
    console.log("Datos", j) 
    console.log("Tiempo FindT", tiempo, "\n") 
 
    Tiempos.push(j) // En general 
    Tiempo_FindT.push(tiempo) 
     
}

console.log(Tiempos)
console.log(Tiempo_FindT)