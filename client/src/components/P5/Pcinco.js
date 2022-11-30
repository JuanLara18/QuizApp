
import * as p5 from "p5" 
import "./css/screen.css" 
import Sketch  from  "react-p5" ; 
import Swal, * as sweet from "sweetalert2"; 
import React, {Fragment, useState, useEffect} from 'react'
 
 
 
  
 
export default function Pcinco(props){ 





  const [dato, setDato] = useState({
    Tema: '',
    Descripcion: '',
    respuestas:'' ,
    respuesta_correcta: '',
    Puntaje:''
  })
  
  const [datos, setDatos] = useState([])
  const [listUpdated, setListUpdated] = useState(false)
  
  
  //petición de datos
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
  
  console.log(datos)
  
  for(const x of datos){ 
    x.respuestas = x.respuestas.split(","); 
    for(let i = 0; i < x.respuestas.length;  i++){ 
      x.respuestas[i] = x.respuestas[i].substring(2); 
    } 
    x.respuesta_correcta = x.respuesta_correcta.substring(2); 
  } 







let qz; 
let k = 0; 
let nav = [], quest, ans = []; 
let selectans, verR; 
 
// const preload = (p5) => { 
//   qz = p5.loadImage("./logoProp.png"); 
// } 
 
const setup = (p5, canvasParentRef)=> { 
  p5.createCanvas(1300, 685).parent(canvasParentRef); 
  // qz = p5.loadImage("./logoProp.png", (qz) => { 
  //   p5.image(qz, 59, 26, 98, 98); 
  // }); 
  qz = p5.loadImage("./logoProp.png"); 
  p5.image(qz, 59, 26, 98, 98); 
 
  nav[0] = p5.createButton("Ver pregunta");  
  nav[1] = p5.createButton("Terminar"); 
  nav[2] = p5.createButton("Anterior"); 
  nav[3] = p5.createButton("Siguiente"); 
   
  nav[0].position(152, 25); 
  nav[1].position(722, 22); 
  nav[2].position(897, 22); 
  nav[3].position(1072, 22); 
 
  nav[0].size(207, 50); 
  nav[1].size(160, 53); 
  nav[2].size(160, 53); 
  nav[3].size(182, 53); 
   
  for(const x of nav){ 
    x.class("but"); 
    x.mouseOver(changeStyle); 
    x.mouseOut(revoke); 
  } 
   
  nav[3].mouseClicked(cont); 
  nav[2].mouseClicked(prev); 
  nav[0].mouseClicked(ver); 
 
 
  quest = p5.createDiv(datos[0].Descripcion); 
  quest.position(36, 105); 
  quest.size(1228, 200); 
  quest.class("quest"); 
 
 
  for(let i = 0; i < 4; i++){ 
    ans[i] = p5.createButton(datos[0].respuestas[i]); 
    ans[i].id(i); 
  } 
   
  ans[0].position(116, 363); 
  ans[1].position(116, 438); 
  ans[2].position(116, 513); 
  ans[3].position(116, 588); 
   
  for(let i = 0; i < 4; i++){ 
    ans[i].size(1068, 48); 
    ans[i].class("ans"); 
  } 
 
  ans[0].mouseOver(changeStyle2); 
  ans[1].mouseOver(changeStyle2); 
  ans[2].mouseOver(changeStyle2); 
  ans[3].mouseOver(changeStyle2); 
  ans[0].mouseOut(revoke2); 
  ans[1].mouseOut(revoke2); 
  ans[2].mouseOut(revoke2); 
  ans[3].mouseOut(revoke2); 
   
  ans[0].mouseClicked(select); 
  ans[1].mouseClicked(select); 
  ans[2].mouseClicked(select); 
  ans[3].mouseClicked(select); 
 
   
  console.log(qz); 
  //console.log(ans[0].id()); 
 
} 
 
 const draw =(p5)=> { 
   
  if(Swal.isVisible()){ 
    p5.frameRate(0); 
  } else { 
    p5.frameRate(60); 
  } 
  //windowResized(); 
  // p5.background(0,0,255); 
 
  // p5.circle(200, 200, k); 
  // k += 1; 
 
  //p5.rect(72, 463, 1296, 498, 20); 
  p5.push(); 
  p5.fill(65, 62, 62); 
  p5.noStroke(); 
  p5.rect(65, 335, 1171, 329, 20); 
  p5.pop(); 
 
//   p5.push(); 
//   p5.fill(0, 0, 0, 50); 
//   p5.triangle(1009, 96, 969, 76, 1009, 56); 
//   p5.triangle(1330, 57, 1330, 97, 1370, 77); 
//   p5.pop(); 
} 
 
// This Redraws the Canvas when resized 
// windowResized = function () { 
//   resizeCanvas(windowWidth, windowHeight); 
// }; 
 
  function ver(){ 
    for (const y of ans){ 
      if(datos[k].respuesta_correcta !== y.html()){ 
        y.class("ans3"); 
      } else { 
        verR = y.id(); 
      } 
    } 
     
  } 
 
  function changeStyle(){ 
    this.class("but2"); 
  } 
 
  function changeStyle2(){ 
    if(!selectans){ 
      this.class("ans2"); 
    } 
  } 
 
  function revoke() { 
    this.class("but"); 
  } 
   
  function revoke2() { 
    if(!selectans){ 
      if(verR){ 
        if(this.id() !== verR){ 
          this.class("ans3"); 
        }else { 
          this.class("ans"); 
        } 
      } else { 
        this.class("ans"); 
      } 
    } else { 
      if(verR){ 
        if(this.id() !== verR && this.id() !== selectans){ 
          this.class("ans3"); 
        } else  if(this.id() === verR && this.id() !== selectans){ 
         this.class("ans"); 
      } else { 
        if(this.class() !== "ans2"){ 
          this.class("ans"); 
        } 
      } 
    } 
    } 
  } 
    
 
  function select(){ 
    if(selectans){

      if(selectans !== this.id()){ 
        for(const x of ans){ 
          if(x.id() === selectans){ 
            if(verR){ 
              if(verR === x.id()){ 
                x.class("ans"); 
                this.class("ans2") 
              } else { 
                x.class("ans3"); 
                this.class("ans2"); 
              } 
            }else { 
              x.class("ans"); 
              this.class("ans2"); 
            } 
          } 
        } 
        selectans = this.id(); 
      } else { 
        if(verR){ 
          if(verR === this.id()){ 
            this.class("ans") 
          } else { 
            this.class("ans3") 
          } 
        } else { 
          this.class("ans");  
        } 
        selectans = undefined; 
      } 
    } else { 
      this.class("ans2"); 
      selectans = this.id(); 
    } 
  } 
 
// const windowResized = (p5) => { 
//   p5.resizeCanvas(p5.windowWidth, p5.windowHeight); 
// }; 
 
 
  function cont() { 
    if(k < datos.length - 1){ 
     
    if(verR){ 
      Swal.fire({ 
        title: 'Puntue su rendimiento aqui: ', 
        color: "white", 
        input: 'text', 
        showCancelButton: true, 
        confirmButtonText: 'Ok', 
        background: "rgba(65, 62, 62, 1)" 
         
      }).then((result) => { 
        if(result.isConfirmed){ 
          k += 1; 
          quest.html(datos[k].Descripcion); 
          for(let i = 0; i < 4; i++){ 
            ans[i].html(datos[k].respuestas[i]); 
          } 
          for(const x of ans){ 
            x.class("ans"); 
          }  
        } 
        verR = undefined;  
      }) 
    } else { 
      k += 1; 
      quest.html(datos[k].Descripcion); 
      for(let i = 0; i < 4; i++){ 
        ans[i].html(datos[k].respuestas[i]); 
      } 
      for(const x of ans){ 
        x.class("ans"); 
      } 
      //console.log(SweetAlertResult.isConfirmed); 
    } 
    } 
  } 
 
   function prev(){ 
    if(k > 0){ 
      k -= 1; 
      quest.html(datos[k].Descripcion); 
      for(let i = 0; i < 4; i++){ 
        ans[i].html(datos[k].respuestas[i]); 
      } 
 
      for(const x of ans){ 
        x.class("ans"); 
      } 
    } 
  } 
   
  return <Sketch setup={setup} draw={draw} /> 
     
 
}