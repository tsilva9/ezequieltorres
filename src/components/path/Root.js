import "../../css/style.css";
import Hero from "../hero/Hero";
import Galeria from "../galeria/Galeria";
import useLocoScroll from "../../utils/useLocoScroll";
import { useEffect } from "react";
import CustomCursor from "../../utils/CustomCursor";
import { useState } from "react";
import useImagePreloader from "../../utils/useImagePreloader";
import Navbar from "../Navbar";

const App = () => {
  const [preloader, setPreloader] = useState(false);
  const loco = useLocoScroll(true);

  const [galeriaImages, setGaleriaImages] = useState({
    vertical1: require("../../assets/galeria/vertical-1.jpg"),
    horizontal1: require("../../assets/galeria/horizontal-1.jpg"),
    vertical2: require("../../assets/galeria/vertical-2.jpg"),
    horizontal2: require("../../assets/galeria/horizontal-2.jpg"),
    vertical3: require("../../assets/galeria/vertical-3.jpg"),
    horizontal3: require("../../assets/galeria/horizontal-3.jpg"),
    horizontal4: require("../../assets/galeria/horizontal-4.jpg"),
    vertical4: require("../../assets/galeria/vertical-4.jpg"),
    horizontal5: require("../../assets/galeria/horizontal-5.jpg"),
    horizontal6: require("../../assets/galeria/horizontal-6.jpg"),
  });

  const imagesPreloaded = useImagePreloader(galeriaImages).imagesPreloaded;

  // useEffect(() => {});

  useEffect(() => {
    setPreloader(imagesPreloaded);
  }, [imagesPreloaded]);

  return (
    <div data-scroll-container id="main-scp" className="app">
      <Navbar />
      <CustomCursor />
      <Hero />
      <Galeria setPreloader={setPreloader} images={galeriaImages} />
    </div>
  );
};

export default App;
