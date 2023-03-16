import "../../css/style.css";
import Redes from "../Redes";

const Hero = () => {
  return (
    <div data-scroll-section>
      <div className="hero">
        <h1 className="hero__nombre">Ezequiel Torres</h1>
        <h2 className="hero__titulo">(Fotógrafo y Diseñador)</h2>

        <p className="hero__descripcion">
          Mi trabajo se enfoca en la fotografía de conciertos y estética de
          artistas. Ambos rubros se conjugan en materia de diseño, dando lugar a
          coberturas - sesiones - portadas de álbumes - visuales - flyers.
          Teniendo como principios la calidad y atención al detalle necesarios
          para un producto que cumpla los estándares solicitados por el cliente.
        </p>

        <div className="hero__redes-container">
          <Redes />
        </div>
        <p className="hero__foot">2022, Hecho con amor</p>
      </div>
    </div>
  );
};

export default Hero;
