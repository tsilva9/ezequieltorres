import "../../css/style.css";
import ImageContainer from "../ImageContainer";
import Triptico from "../Triptico";

const GaleriaOtros = (props) => {
  return (
    <div data-scroll-section>
      <div className="galeria-otros">
        <div
          className="galeria-otros__container galeria-otros__container--cuadrado-1"
          data-scroll
          data-scroll-speed="0"
        >
          <ImageContainer
            imgPath={props.images.cuadrado1}
            clase="image-container__image image-container__image--sm"
          />
        </div>

        <div
          className="galeria-otros__container  galeria-otros__container--horizontal-1"
          data-scroll
          data-scroll-speed="2"
        >
          <ImageContainer
            imgPath={props.images.horizontal1}
            clase="image-container__image image-container__image--hl"
          />
        </div>

        <div
          className="galeria-otros__container galeria-otros__container--triptico-1"
          data-scroll
          data-scroll-speed="1"
        >
          <Triptico imagenes={props.triptico.triptico1} />
        </div>

        <div
          className="galeria-otros__container galeria-otros__container--cuadrado-2"
          data-scroll
          data-scroll-speed="0"
        >
          <ImageContainer
            imgPath={props.images.cuadrado2}
            clase="image-container__image image-container__image--sm"
          />
        </div>

        <div
          className="galeria-otros__container galeria-otros__container--horizontal-2"
          data-scroll
          data-scroll-speed="0"
        >
          <ImageContainer
            imgPath={props.images.horizontal2}
            clase="image-container__image image-container__image--wholeh"
          />
        </div>

        <div
          className="galeria-otros__container galeria-otros__container--vertical-1"
          data-scroll
          data-scroll-speed="1"
        >
          <ImageContainer
            imgPath={props.images.vertical1}
            clase="image-container__image image-container__image--vl"
          />
        </div>

        <div
          className="galeria-otros__container galeria-otros__container--cuadrado-3"
          data-scroll
          data-scroll-speed="0"
        >
          <ImageContainer
            imgPath={props.images.cuadrado3}
            clase="image-container__image image-container__image--wholeh"
          />
        </div>

        <div
          className="galeria-otros__container  galeria-otros__container--horizontal-3"
          data-scroll
          data-scroll-speed="2"
        >
          <ImageContainer
            imgPath={props.images.horizontal3}
            clase="image-container__image image-container__image--hl"
          />
        </div>

        <div
          className="galeria-otros__container galeria-otros__container--cuadrado-4"
          data-scroll
          data-scroll-speed="0"
        >
          <ImageContainer
            imgPath={props.images.cuadrado4}
            clase="image-container__image image-container__image--sm"
          />
        </div>
      </div>
    </div>
  );
};
export default GaleriaOtros;
