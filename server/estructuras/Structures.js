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

// Prueba pila

// let mipila = new Pila();
// console.log(mipila.empty());
// mipila.push("texto");
// mipila.push(2);
// console.log(mipila.empty());
// console.log(mipila.pop());
// console.log(mipila.pop());
// console.log(mipila.empty());
// console.log(mipila.pop());

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

class PilaRef {
    constructor(){
        this.top = null; 
    }

    empty(){
        return this.top == null;
    }

    push(a){
        let newp = new Nodo(a);
        newp.setNext(this.top);
        this.top = newp;
    }

    pop(){
        let d;
        if(!this.empty()){
            d = this.top.getData();
            this.top = this.top.getNext();
        } else {
            throw 'La PilaRef está vacía'
        }        
        return d;
    }
}

// Prueba PilaRef

// let mipila = new PilaRef();
// console.log(mipila.empty());
// mipila.push("texto");
// mipila.push(2);
// console.log(mipila.empty());
// console.log(mipila.pop());
// console.log(mipila.pop());
// console.log(mipila.empty());
// console.log(mipila.pop());

class ColaClassic{
    constructor(tam = 10){
        this.array = [];
        this.front = 0;
        this.back = 0;
        this.contador = 0;
        this.tam = tam;
    }

    empty(){
        return this.contador == 0;
    }

    enqueue(a){
        this.array[this.back] = a;
        this.back = (this.back + 1) % this.tam;
        this.contador++;
    }

    dequeue(){
        let res;
        if(!this.empty()){
            this.contador--;
            res = this.array[this.front];
            this.front = (this.front + 1) % this.tam;            
        } else {
            throw 'La cola está vacía'
        }
        return res
    }
}

class Cola{
    constructor(){
        this.array = [];
        this.front = 0
        this.back = 0;
    }

    empty(){
        return this.front == this.back;
    }

    enqueue(a){
        this.array[this.back] = a;
        this.back++;
    }

    dequeue(){
        let res;
        if(!this.empty()){
            res = this.array[this.front];
            this.front++;          
        } else {
            throw 'La cola está vacía'
        }
        return res
    }
}

// Pruba Cola

// let cola = new ColaClassic();
// console.log(cola.empty())
// cola.enqueue(2);
// cola.enqueue(-2);
// cola.enqueue("valor");
// console.log(cola.empty())
// console.log(cola.dequeue());
// console.log(cola.dequeue());
// console.log(cola.dequeue());

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

// Prueba ColaRef

// let cola = new ColaRef();

// console.log(cola.empty());
// cola.enqueue(2);
// cola.enqueue(3);
// cola.enqueue(4);
// cola.enqueue("hola");
// console.log(cola.dequeue());
// console.log(cola.dequeue());
// console.log(cola.dequeue());
// console.log(cola.empty());
// console.log(cola.dequeue());
// console.log(cola.empty());

class Lista{

    constructor(lis = []){
        this.array = lis;
        this.count = 0;
    }

    empty(){
        return this.count <= 0;
    }

    delete(a){
        let del = false;
        if(!this.empty()){
            if(this.search(a)){
                for (let i = 0; i < count-1; i++) {
                    this.array[i] = this.array[i+1];
                }
                count--;
            }
            del = true;
        } else {
            throw 'Lista vacía'
        }
        return del
    }

    insert(a){
        let ins = false;
        let m, n = this.search(a)
        if(!m){
            let position = n;
            for (let i = this.count; i > position; i--) {
                this.array[i] = this.array[i-1];
            }
            this.array[position] = a;
            this.count++;
            ins = true;
        } else {
            throw 'No ta\''
        }
        return ins;
    }

    search(a){
        let found, stop = (false, false);
        var position = 0;
        while(position < this.count && !stop){
            if(this.array[position] >= a){
                stop = true;
                if(this.array[position] == a){
                    found = true;
                } 
            } else {
                position++;
                return (found, position);
            }
        }
    }
}

// Prueba lista

// let lis = new Lista();
// console.log(lis.empty());
// lis.insert(3)
// lis.insert(2)
// lis.insert(5)
// lis.insert(-1)
// console.log(lis.search(2))
// console.log(lis.search(3))
// console.log(lis.search(4))
// console.log(lis.search(-1))

function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
    }

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
    }

    function dispReverse() {
        var currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.previous == null)) {
            print(currNode.element);
            currNode = currNode.previous;
        }
    }

    function findLast() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
        }

    function remove(item) {
        var currNode = this.find(item);
        if (!(currNode.next == null)) {
            function dispReverse() {
                currNode.previous.next = currNode.next;
                currNode.next.previous = currNode.previous;
                currNode.next = null;
                currNode.previous = null;
            }
        }
    }

    function display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            print(currNode.next.element);
            currNode = currNode.next;
        }
    }
    
    function find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    
    function insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
        }

//var a = new LList();

//a.insert("hola")
//a.display();