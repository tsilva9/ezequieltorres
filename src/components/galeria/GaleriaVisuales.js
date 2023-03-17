import "../../css/style.css";
import ImageContainer from "../ImageContainer";
import Triptico from "../Triptico";
import { mouseEnter, mouseLeave } from "../../utils/mouseLeaveEnter";

const GaleriaVisuales = (props) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div data-scroll-section>
      <div className="galeria-visuales">
        {window.innerWidth <= 1000 ? (
          <div></div>
        ) : (
          <h1 className="galeria-visuales__nombre">Visuales</h1>
        )}

        <div
          className="galeria-visuales__container  galeria-visuales__container--gif-1"
          data-scroll
          data-scroll-speed="2"
          onClick={() =>
            openInNewTab("https://www.youtube.com/watch?v=oYgjcegyL0o")
          }
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <ImageContainer
            imgPath={props.images.gif1}
            clase="image-container__image image-container__gif image-container__image--hl"
          />
        </div>
        <div
          className="galeria-visuales__container galeria-visuales__container--triptico-1"
          data-scroll
          data-scroll-speed="1"
        >
          <Triptico imagenes={props.triptico.triptico1} />
        </div>
        <div
          className="galeria-visuales__container galeria-visuales__container--horizontal-1"
          data-scroll
          data-scroll-speed="0"
        >
          <ImageContainer
            imgPath={props.images.horizontal5}
            clase="image-container__image image-container__image--hl"
          />
        </div>
        <div
          className="galeria-visuales__container  galeria-visuales__container--gif-2"
          data-scroll
          data-scroll-speed="2"
          onClick={() =>
            openInNewTab("https://www.youtube.com/watch?v=oYgjcegyL0o")
          }
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <ImageContainer
            imgPath={props.images.gif2}
            clase="image-container__image image-container__gif image-container__image--hl"
          />
        </div>
        <div
          className="galeria-visuales__container galeria-visuales__container--texto"
          data-scroll
          data-scroll-speed="4"
        >
          <ImageContainer
            imgPath={props.images.texto}
            clase="image-container__image image-container__image--hs"
          />
        </div>
        <div
          className="galeria-visuales__container galeria-visuales__container--triptico-2"
          data-scroll
          data-scroll-speed="0"
        >
          <Triptico imagenes={props.triptico.triptico2} />
        </div>
        <div
          className="galeria-visuales__container  galeria-visuales__container--horizontal-4"
          data-scroll
          data-scroll-speed="1"
          onClick={() =>
            openInNewTab("https://www.youtube.com/watch?v=QQa0haPHeHI")
          }
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <ImageContainer
            imgPath={props.images.gif3}
            clase="image-container__image image-container__gif image-container__image--hl"
          />
        </div>
        <div
          className="galeria-visuales__container galeria-visuales__container--cuadrado-1"
          data-scroll
          data-scroll-speed="1"
        >
          <ImageContainer
            imgPath={props.images.cuadrado7}
            clase="image-container__image image-container__image--sm"
          />
        </div>
        <div
          className="galeria-visuales__container galeria-visuales__container--cuadrado-2"
          data-scroll
          data-scroll-speed="1"
        >
          <ImageContainer
            imgPath={props.images.cuadrado8}
            clase="image-container__image image-container__image--sm"
          />
        </div>
        <div
          className="galeria-visuales__container galeria-visuales__container--vertical-4"
          data-scroll
          data-scroll-speed="0"
        >
          <ImageContainer
            imgPath={props.images.vertical4}
            clase="image-container__image image-container__image--wholeh"
          />
        </div>
      </div>
    </div>
  );
};

export default GaleriaVisuales;
