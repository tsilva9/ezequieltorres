import "../../css/style.css";
import Amor from "../Amor";

const Visuales = () => {
  return (
    <div data-scroll-section>
      <div className="visuales">
        {window.innerWidth <= 1000 ? (
          <h1 className="visuales__nombre">Visuales</h1>
        ) : (
          <div></div>
        )}
        {/* <h1 className="visuales__nombre">Visuales</h1> */}

        <p className="visuales__descripcion visuales__descripcion--1">
          el propósito de las visuales se enfoca en enriquecer la
          experiencia del show, aportando una cualidad inmersiva
        </p>

        <p className="visuales__descripcion visuales__descripcion--2">
          cada proyecto visual se desarrolla priorizando la identidad única de
          cada artista con el objetivo de lograr un resultado irrepetible.
        </p>

        <p className="visuales__foot"><Amor/></p>
      </div>
    </div>
  );
};

export default Visuales;
