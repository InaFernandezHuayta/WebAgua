import React from "react";
import styles from "./Inicio.module.css";

const Inicio = () => {
  return (
    <div name="Inicio" className={styles.inicio}>
      
      <img
        className={styles.Image}
        src={require("../assets/Image.jpg")}
      ></img>
      <p>En nuestra pagina podras encontrar informacion util para utilizar de forma adecuada el agua</p>
      <img
        className={styles.Image}
        src={require("../assets/agua.jpg")}
      ></img>
    </div>
  );
};

export default Inicio;
