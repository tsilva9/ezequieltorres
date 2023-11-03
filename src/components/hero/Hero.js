import "../../css/style.css";
import Amor from "../Amor";
import Redes from "../Redes";

const Hero = () => {
  return (
    <div data-scroll-section>
      <div className="hero">
        <h1 className="hero__nombre">Ezequiel Torres</h1>
        <h2 className="hero__titulo">(fotografía y diseño)</h2>

        <p className="hero__descripcion">
          mi trabajo se enfoca en la fotografía de conciertos y estética de
          artistas. ambos rubros se conjugan en materia de diseño, dando lugar a
          coberturas - sesiones - portadas de álbums - visuales - flyers.
          teniendo como principios la calidad y atención al detalle necesarios
          para un producto que cumpla los estándares solicitados por el cliente.
        </p>

        <div className="hero__redes-container">
          <Redes />
        </div>
        <p className="hero__foot"><Amor/></p>
      </div>
    </div>
  );
};

export default Hero;
