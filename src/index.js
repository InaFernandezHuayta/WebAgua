/*CLASE 1
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement=document.getElementById("root")
const root=ReactDOM.createRoot(rootElement)

function Greeting(){
  return <h1>Hola mundo desde componente</h1>
}
function Suma(){
  let a=10
  let b=20
  let c=a+b
  return c
}
/*
root.render(
  <h1>Hola Mundo!!!</h1> 
)
*/
/*
root.render(Greeting())

root.render(
    <div>
      {Greeting()}
      {Greeting()}
      {Greeting()}
      {Greeting()}
    </div>
)

root.render(
  <div>
    <Greeting></Greeting>
    <Greeting></Greeting>
  </div>
)

//SELF CLOSING
root.render(
  <div>
    <Greeting/>
    <Greeting/>
    <Suma/>
  </div>
)
*/
/*
//CLASE 30/08/2023
import React from "react";
import ReactDOM from "react-dom/client";


import {Greeting, UserCard} from './Greeting'
import {Producto} from "./Producto"

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
  <Greeting/>
  <Greeting/>
  <Greeting/>
  <Greeting/>
  <br></br>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <br></br>
  <Producto/>
  <Producto/>
  <Producto/>
  <Producto/>
  <Producto/>
  <Producto/>
  <Producto/>
  <Producto/>
  <Producto/>
  <Producto/>
  
  </>
)
*/
/*
function Funcion2(){
  const name="fatz"
  const number= 1234
  var a=1
  var b=2
  return <div>
    <h1>{name}</h1>
    <h1>{number}</h1>
    <h1>{a+b}</h1>
    <h1>{a-b}</h1>
  </div>
}

function Greeting(){
  const married=false  //true
  if(married){
      return <h1>Estoy casado</h1>
  }
  else{
      return <h1>No estoy casado</h1>
  }
}
function Greeting2(){
  const married=false
  return <h1>{married? "Casado":"Soltero"}</h1> //{married? "por verdad":"por falso"}  OPERADOR TERNARIO
}

function Greeting3(){
  //user es una CLASE
  const user={   
    //firstName y lastName son  sus atributos
       firstName:'Ryan',  
       lastName:"Ray"
  }
  return <h1>{JSON.stringify(user)}</h1>
}

//ESTRUCTURA DE DATOS
function Greeting4(){
  const user={
       firstName:'Ryan',
       lastName:"Ray"
  }
  return (
      <div>
          <h1>{user.firstName}</h1>
          <h1>{user.lastName}</h1>
      </div>
  )
}

function Greeting5(){
  function add(x,y){
      return x+y
  }
  return(
      <div>
          <h1>
              {add(40,90)}
          </h1>
      </div>
  )

}

root.render(
  <div>
    //<Funcion2/>
    //<Greeting/>
    //<Greeting2/>
    //<Greeting3/>
    //<Greeting4/>
    //<Greeting5/>
  </div>
//se utiliza div para poder llamar a diferentes funciones
)
*/

/*
//CLASE 06/09/2023
import React from "react";
import ReactDOM from "react-dom/client";
import ReactDOM, { hydrateRoot } from "react-dom/client";
import {UserCard} from './Componente'
import {Button} from './Button'
import {TaskCard, TaskCard2} from './Componente'
import {TaskCard, TaskCard2, TaskCard3 } from "./ComponenteCSS";
import {Posts} from './Posts'
import React , {useState} from "react";
import ReactDOM from "react-dom/client";
const root=ReactDOM.createRoot(document.getElementById("root"))
*/
/*
//para el archivo componente
root.render(
<>
      <UserCard
        name="Ryan Ray"
        amount={3000}
        married={true}
        points={[99, 33.3, 22.2]}
        address={{ street: "123 Main Street", city: "New York" }}//4
        greet={function(){alert('Hello')}}
      />
      <UserCard
        name="Joe Mcmillan"      
        amount={1000}
        married={false}
        points={[100,20]}
        address={{
            street:"av some 123",
            city:"new york"
        }}
      />
    </>
    
)
*/

/*
//para el archivo button
root.render(
  <>
  <Button text="Click me" name="REACT"/>
      <Button text='Pay'/>
      <Button text='Go to'/>
  
      </>
  
  )


//para los taskcard
root.render(
  <>
      <TaskCard/>
      <TaskCard2/>
  </>
)
*/

/*
//para componenteCSS
root.render(
  <>
      <TaskCard ready={true}/>
      <hr></hr>
      <TaskCard2 ready={true}/>
      <hr></hr>
      <TaskCard3 ready={false}/>
  </>
)
*/
/*
//EN BUTOON
root.render(
  <>
  <Button text="Saludar"/>
  <input onClick={function(){alert('Input seleccionado')}} /> 
  //<input onChange={function(){alert('Cambios en entrada')}} />
  //<input onChange={function(){console.log('Cambios en entrada')}} /> 
  //<input id="hola" onChange={(e)=>{console.log(e.target.value)}}/> 
  //<input id="hola" onDoubleClick={()=>console.log("Doble click")}/> 
  </>
)
*/

/*
//ENTRE LLAVES, EL ARGUMENTO, LO QUE SE VA A REALIZAR
//FORMA CORRECTA DE MANEJAR 
const handleChange=(e)=>{
  console.log(e.target.value)    
}
root.render(
  <>
  <Button text="Saludar"/>
  <input id="hola" onChange={handleChange}/>
  </>
)



root.render(
  <>

  <form onSubmit={()=>console.log('Envia datos del formulario')} >
      <h1>Registro del usuario 1</h1>
      <button>Send</button>

  </form>

  </>   
)
*/
/*
root.render(
  <>
   <form onSubmit={(e)=>{
       e.preventDefault()
       console.log("Enviado")
   }} >
       <h1>Registro del usuario 2</h1>
       <button>Send</button>

   </form>

  </>   
)
*/

/*
//para archivo POSTS
root.render(
  <>
  <Posts/>
  </>   
)
*/
/*
EN MODO CONSOLA browsers en mas herramientas, herraientas para desarrolladores
mas herramientas / herramientas para desarrolladores

const names=['ryan','joe','marcos']
names
names.map(function () { return 'Hola'})
names.map(function (name) {return 'Hola'+name})
const holaNames=names.map(function (name) {return 'Hola '+name})

*/
/*

//usuarios con imagenes jaladas de la web
const users=[
  {
      id:1,
      name: 'Ryan ray',
      image: 'https://robohash.org/user1'
  
  },
  {
      id:2,
      name: 'Joe',
      image: 'https://robohash.org/user2'
  
  }, 
  {
    id:3,
    name: 'Mike',
    image: 'https://robohash.org/user3'

  },    
  {
    id:4,
    name: 'Tom',
    image: 'https://robohash.org/user6'

  } 
  ]

root.render(
 <>
      {users.map((user, index) => {
      return (
        <div key={index} >
            <h1>{index}</h1>
            <h1>{user.name}</h1>
            <img src={user.image}/>
        </div>
      )
    })}
 </>   
)
*/
/*

let counter=0
function Counter(){

    const [counter, setCounter]=useState(0)
    
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>{
                setCounter(counter+1)
                }}>
                Sumar
            </button>
            <hr></hr>
            <button onClick={()=>{
                setCounter(counter-1)
                }}>
                Restar
            </button>
            <hr></hr>
            <button onClick={()=>{
                setCounter(0)
                }}>
                Reestablecer
            </button>
        </div>
    )
}

root.render(
  <>
  <Counter/>
  </>
);
*/
/*
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
*/
/*
//EJERCICIO 1
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>

)
*/

/*
//EJERCICIO 2
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const estilos = {
  
  contenedor: {
    
    maxWidth: "400px",
    padding: "10px",
    margintop: "0"
  },
  
};
  
const datos=[
  {
  id:1,
  paterno: "Fernadez",
  materno: "Huayta",
  nombre: "Ina",
  ci:123456,
  puntaje: 12345
  },
  {
    id:2,
    paterno: "Fernadez",
    materno: "Huayta",
    nombre: "Ina",
    ci:123456,
    puntaje: 12345
  },
  {
    id:3,
    paterno: "Fernadez",
    materno: "Huayta",
    nombre: "Ina",
    ci:123456,
    puntaje: 12345
  },
  {
    id:4,
    paterno: "Fernadez",
    materno: "Huayta",
    nombre: "Ina",
    ci:123456,
    puntaje: 12345
  }
]
root.render(
  <>
      <h1>DATOS DEL ESTUDIANTE WEB II</h1>
      
      <hr size="15px" color="red" />
       {datos.map((datos,index) => {
       return (
         <div style={estilos.contenedor}>
           
            <p style={{margin:0}}>1. Id: {datos.id}</p>
            <p style={{margin:0}}>2. Paterno: {datos.paterno}</p>
            <p style={{margin:0}}>3. Materno: {datos.materno}</p>
            <p style={{margin:0}}>4. Nombre: {datos.nombre}</p>
            <p style={{margin:0}}>5. Ci: {datos.ci}</p>
            <p style={{margin:0}}>6. Puntaje: {datos.puntaje}</p>
           
         </div>
       )
     })}
     <hr size="2px" color="red" />
     
  </>   
 )
*/

//ejercicio 3
/*
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

const estilos = {
  
  contenedor: {
    backgroundColor: "white",
    maxWidth: "400px",
    border: "3px solid red",
    textAlign: "center",
    float: "left",
    borderRadius: "15px",
    padding: "20px"
  },
  
};


const users=[
  {
      
      name: 'Usuario_1',
      image: 'https://robohash.org/user1'
  
  },
  {
      
      name: 'Usuario_2',
      image: 'https://robohash.org/user2'
  
  }, 
  {
    
    name: 'Usuario_3',
    image: 'https://robohash.org/user3'

  },    
  
  ]

root.render(
 <>
      {users.map((user, index) => {
      return (
        
        <div style={estilos.contenedor} >
            
            <h1>{user.name}</h1>
            <img src={user.image}/>
            <App></App>
        </div>
      )
    })}
 </>   
)
*/
/*
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();