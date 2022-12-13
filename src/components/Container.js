import "../css/style.css";
import Hero from "./Hero";
import Galeria from "./Galeria";
import useLocoScroll from "../utils/useLocoScroll";
import { useEffect } from "react";

const Container = () => {
  const loco = useLocoScroll(true);

  useEffect(() => {});

  return (
    <div className="container" data-scroll-container id="main-scp">
      <Hero />
      <Galeria />
    </div>
  );
};

export default Container;
