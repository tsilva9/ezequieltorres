import "../css/style.css";
import Hero from "./Hero";
import Galeria from "./Galeria";
import Visuales from "./Visuales";
import useLocoScroll from "../utils/useLocoScroll";
import { useEffect } from "react";
import CustomCursor from "../utils/CustomCursor";
import { useState } from "react";
import useImagePreloader from "../utils/useImagePreloader";
import Navbar from "./Navbar";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const App = () => {
  const [preloader, setPreloader] = useState(false);
  const loco = useLocoScroll(preloader);

  const [galeriaImages, setGaleriaImages] = useState({
    vertical1: require("../assets/compressed/vertical-1.jpg"),
    horizontal1: require("../assets/compressed/horizontal-1.jpg"),
    vertical2: require("../assets/compressed/vertical-2.jpg"),
    horizontal2: require("../assets/compressed/horizontal-2.jpg"),
    vertical3: require("../assets/compressed/vertical-3.jpg"),
    horizontal3: require("../assets/compressed/horizontal-3.jpg"),
    horizontal4: require("../assets/compressed/horizontal-4.jpg"),
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
      {/* <Visuales  /> */}
    </div>
  );
};

export default App;
