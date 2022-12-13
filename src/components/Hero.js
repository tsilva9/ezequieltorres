import "../css/style.css";
import Redes from "./Redes";

const Hero = () => {
  return (
    <div data-scroll-section className="hero">
      <h1 data-scroll className="hero__nombre">
        Ezequiel Torres
      </h1>
      <h2 data-scroll className="hero__titulo">
        (Fotógrafo y Diseñador)
      </h2>

      <p data-scroll className="hero__descripcion">
        Dolor sit amet, consectetur adipiscing elit. Praesent convallis aliquam
        nisi, nec sagittis eros sollicitudin porttitor. Nulla feugiat massa
        massa, eu facilisis dolor rhoncus quis. Nulla feugiat massa massa, eu
        facilisis dolor rhoncus quis. Nulla feugiat massa massa, eu facilisis
        dolor rhoncus quis.
      </p>

      <div data-scroll className="hero__redes-container">
        <Redes />
      </div>

      <p data-scroll className="hero__foot">
        2022, Hecho con amor
      </p>
    </div>
  );
};

export default Hero;
