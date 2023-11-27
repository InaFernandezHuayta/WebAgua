import React , {useEffect, useState} from "react";
import styles from "./Calculadora.module.css";

export default function Calculadora() {

  const [number, setNumber] = useState({})
  const [resultado, setResultado] = useState()
  var letra =""

  useEffect(()=>{
    const { one } = number
    setResultado(Number(one)*12)
  },[number])

  const handleInput = (event) => {
    const { name, value } = event.target
    setNumber({...number, [name]: value})
  }

  if(resultado >= 61){
    letra="Gastas mucha agua, trata de reducir el tiempo que te bañas :D";
  }else{
    letra="Te bañas el tiempo adecuado, felicidades :D";
  }

  return (
    
    <div name="Calculadora" className={styles.calculadora}>
      <h2>Calculadora</h2>
      <p>Ingresa el tiempo que te bañas en minutos por favor</p>
      <input className="input" onChange={handleInput} name="one" value={number.one}/>
      <p>
      En total gastas: <input value={resultado}/> litros de agua
      </p>
      <p>{letra}</p>
    </div>
  );
}
