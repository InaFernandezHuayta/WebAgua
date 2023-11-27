import React from "react";
import styles from "./Reciclar.module.css";
import { GiClothes } from "react-icons/gi";
import { GiWaterSplash } from "react-icons/gi";
import { FaCloudShowersWater } from "react-icons/fa6";
import { AiOutlineRise } from "react-icons/ai";
import { FaHandHoldingWater } from "react-icons/fa";

const Reciclar = () => {
  return (
    <div name="Reciclar" className={styles.reciclar}>
      <h2 className={styles.benefitTitle}>
        Formas de reciclar el agua
      </h2>
      <p>
        1. Puedes utilizar el agua con el que te lavas las manos, para regar las plantas o arbustos de tu casa.
        <FaHandHoldingWater />
      </p>
      <img
        className={styles.Image}
        src={require("../assets/manos.jpg")}
      ></img>
      <p>
        2. El agua para lavar ropa puede ser recolectada y limpiar pisos o lavar el baño.
        <GiClothes />
      </p>
      <img
        className={styles.Image}
        src={require("../assets/ropa.jpg")}
      ></img>
      <p>
        3.Se puede recolectar agua de lluvia y conseguir cantidades suficientes para regar las plantas o lavar el coche.
        <FaCloudShowersWater />
      </p>
      <img
        className={styles.Image}
        src={require("../assets/lluvia.jpg")}
      ></img>
      <p>
        4. Evitar el uso de mangueras ya que gasta aproximadamente 10 litros de agua por minuto.
        <GiWaterSplash />
      </p>
      <img
        className={styles.Image}
        src={require("../assets/manguera.jpg")}
      ></img>
      <p>
        5. Cambie los Electrodomésticos que gasten mucha agua como lavadoras, lavaplatos o tinas.
        <AiOutlineRise />
      </p>
      <img
        className={styles.Image}
        src={require("../assets/tina.jpg")}
      ></img>
    </div>
  );
};

export default Reciclar;
