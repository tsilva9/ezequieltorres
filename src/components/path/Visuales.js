import "../../css/style.css";
import VisualesHero from "../hero/VisualesHero";
import useLocoScroll from "../../utils/useLocoScroll";
import { useEffect } from "react";
import CustomCursor from "../../utils/CustomCursor";
import { useState } from "react";
import useImagePreloader from "../../utils/useImagePreloader";
import Navbar from "../Navbar";

import GaleriaVisuales from "../galeria/GaleriaVisuales";

const Visuales = () => {
  const [preloader, setPreloader] = useState(false);
  const loco = useLocoScroll(true);

  const [galeriaVisualesImages, setGaleriaVisualesImages] = useState({
    gif1: require("../../assets/galeriaVisuales/gif-1.gif"),
    gif2: require("../../assets/galeriaVisuales/gif-2.gif"),
    gif3: require("../../assets/galeriaVisuales/gif-3.gif"),
    texto: require("../../assets/galeriaVisuales/texto.png"),
    horizontal5: require("../../assets/galeriaVisuales/horizontal-5.jpg"),
    cuadrado7: require("../../assets/galeriaVisuales/cuadrado-7.jpg"),
    cuadrado8: require("../../assets/galeriaVisuales/cuadrado-8.jpg"),
    vertical4: require("../../assets/galeriaVisuales/vertical-4.jpg"),
  });

  const [triptico, setTriptico] = useState({
    triptico1: {
      img1: require("../../assets/galeriaVisuales/cuadrado-1.jpg"),
      img2: require("../../assets/galeriaVisuales/cuadrado-2.jpg"),
      img3: require("../../assets/galeriaVisuales/cuadrado-3.jpg"),
    },
    triptico2: {
      img1: require("../../assets/galeriaVisuales/cuadrado-4.jpg"),
      img2: require("../../assets/galeriaVisuales/cuadrado-5.jpg"),
      img3: require("../../assets/galeriaVisuales/cuadrado-6.jpg"),
    },
  });

  return (
    <div data-scroll-container id="main-scp" className="app">
      <Navbar />
      <CustomCursor />
      <VisualesHero />
      <GaleriaVisuales images={galeriaVisualesImages} triptico={triptico} />
    </div>
  );
};

export default Visuales;
