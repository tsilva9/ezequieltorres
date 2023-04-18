import "../../css/style.css";
import ImageContainer from "../ImageContainer";

const ErrorHero = (props) => {
  return (
    <div className="error">
      <h1 className="error__error error__error--1">ERROR</h1>
      <h3 className="error__error error__error--2">ERRO R</h3>
      <h3 className="error__error error__error--3">E RRR ORR</h3>
      <p className="error__volver">volver a inicio.</p>

      <p className="error__codigo error__codigo--1">404</p>
      <p className="error__codigo error__codigo--2">
        {"      4            0   4."}
      </p>

      <p className="error__texto">
        la invasión tecnológica en la imaginación técnica, puede advertirse en
        procedimientos artísticos como el collage, el montaje y el fotomontaje.
        alcanzando su plena consumación en la fotografía y el cine. formas de
        arte que no sólo pueden ser reproducidas, sino que fueron diseñadas para
        la reproductibilidad mecánica.
      </p>

      <div className="error__img error__img--1">
        <ImageContainer
          imgPath={props.images.edificio}
          clase="image-container__image image-container__image--vm"
        />
      </div>

      <div className="error__img error__img--2">
        <ImageContainer
          imgPath={props.images.letra}
          clase="image-container__image image-container__image--hs"
        />
      </div>

      <div className="error__img error__img--3">
        <ImageContainer
          imgPath={props.images.cuadrado1}
          clase="image-container__image image-container__image--vm"
        />
      </div>

      <div className="error__img error__img--4">
        <ImageContainer
          imgPath={props.images.flor}
          clase="image-container__image image-container__image--hs"
        />
      </div>
    </div>
  );
};

export default ErrorHero;
