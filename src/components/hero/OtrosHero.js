import "../../css/style.css";

import Amor from "../Amor";

const OtrosHero = (props) => {
  return (
    <div data-scroll-section>
      <div className="otros">
        <h1 className="otros__titulo">Otros</h1>
        <h2 className="otros__trabajos">TRABAJOS</h2>

        <p className="otros__portadas">diseño de portadas</p>

        <p className="otros__estetica otros__estetica--1">
          estética para álbums
        </p>

        {props.mobile ? (
          <p className="otros__estetica otros__estetica--2">
            curaduría de redes/
            <br />
            plataformas de streaming
          </p>
        ) : (
          <p className="otros__estetica otros__estetica--2">
            curaduría de redes/plataformas de streaming
          </p>
        )}

        <p className="otros__foot"><Amor/></p>
      </div>
    </div>
  );
};
export default OtrosHero;
