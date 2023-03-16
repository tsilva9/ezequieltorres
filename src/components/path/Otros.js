import "../../css/style.css";
import { useState } from "react";
import Navbar from "../Navbar";
import OtrosHero from "../hero/OtrosHero";
import GaleriaOtros from "../galeria/GaleriaOtros";
import CustomCursor from "../../utils/CustomCursor";
import useLocoScroll from "../../utils/useLocoScroll";

const Otros = () => {
  const loco = useLocoScroll(true);
  const [galeriaVisualesImages, setGaleriaVisualesImages] = useState({
    horizontal1: require("../../assets/galeriaOtros/horizontal-1.jpg"),
    horizontal2: require("../../assets/galeriaOtros/horizontal-2.jpg"),
    horizontal3: require("../../assets/galeriaOtros/horizontal-3.jpg"),
    vertical1: require("../../assets/galeriaOtros/vertical-1.jpg"),
    cuadrado1: require("../../assets/galeriaOtros/cuadrado-1.jpg"),
    cuadrado2: require("../../assets/galeriaOtros/cuadrado-2.jpg"),
    cuadrado3: require("../../assets/galeriaOtros/cuadrado-3.jpg"),
    cuadrado4: require("../../assets/galeriaOtros/cuadrado-4.jpg"),
  });

  const [triptico, setTriptico] = useState({
    triptico1: {
      img1: require("../../assets/galeriaOtros/triptico-1.jpg"),
      img2: require("../../assets/galeriaOtros/triptico-2.jpg"),
      img3: require("../../assets/galeriaOtros/triptico-3.jpg"),
    },
  });

  return (
    <div data-scroll-container id="main-scp" className="app">
      <Navbar />
      <CustomCursor />
      <OtrosHero />
      <GaleriaOtros images={galeriaVisualesImages} triptico={triptico} />
    </div>
  );
};
export default Otros;
