import "../../css/style.css";
import Navbar from "../Navbar";
import OtrosHero from "../hero/OtrosHero";
import GaleriaOtros from "../galeria/GaleriaOtros";
import CustomCursor from "../../utils/CustomCursor";
import useLocoScroll from "../../utils/useLocoScroll";
import { useState, useEffect } from "react";

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

  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth <= 600 ? true : false
  );

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth <= 600 ? true : false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div data-scroll-container id="main-scp" className="app">
      <Navbar />
      <CustomCursor />
      <OtrosHero mobile={screenWidth} />
      <GaleriaOtros
        images={galeriaVisualesImages}
        triptico={triptico}
        mobile={screenWidth}
      />
    </div>
  );
};
export default Otros;
