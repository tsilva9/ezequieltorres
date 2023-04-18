import "../../css/style.css";
import CustomCursor from "../../utils/CustomCursor";
import ErrorHero from "../hero/ErrorHero";
import { useState } from "react";

const Error = () => {
  const [galeriaVisualesImages, setGaleriaVisualesImages] = useState({
    edificio: require("../../assets/error/edificio.jpg"),
    flor: require("../../assets/error/flor.jpg"),
    letra: require("../../assets/error/letra.png"),
    cuadrado1: require("../../assets/galeriaOtros/cuadrado-3.jpg"),
  });

  return (
    <div data-scroll-container id="main-scp" className="app">
      <ErrorHero images={galeriaVisualesImages} />
    </div>
  );
};

export default Error;
