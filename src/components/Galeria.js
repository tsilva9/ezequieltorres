import { useState } from "react";
import "../css/style.css";
import ImageContainer from "./ImageContainer";

const Galeria = (props) => {
  return (
    <div data-scroll-section>
      <div className="galeria">
        <div
          className="galeria__container galeria__container--vertical-1"
          data-scroll
          data-scroll-speed="0"
        >
          <ImageContainer
            imgPath={props.images.vertical1}
            clase="image-container__image image-container__image--vm"
          />
        </div>

        <div
          className="galeria__container galeria__container--horizontal-1"
          data-scroll
          data-scroll-speed="2"
        >
          <ImageContainer
            imgPath={props.images.horizontal1}
            clase="image-container__image image-container__image--hl"
          />
        </div>

        <div
          className="galeria__container galeria__container--vertical-2"
          data-scroll
          data-scroll-speed="0"
        >
          <ImageContainer
            imgPath={props.images.vertical2}
            clase="image-container__image image-container__image--vl"
          />
        </div>

        <div
          className="galeria__container galeria__container--horizontal-2"
          data-scroll
          data-scroll-speed="2"
        >
          <ImageContainer
            imgPath={props.images.horizontal2}
            clase="image-container__image image-container__image--hl"
          />
        </div>

        <div
          className="galeria__container galeria__container--vertical-3"
          data-scroll
          data-scroll-speed="3"
        >
          <ImageContainer
            imgPath={props.images.vertical3}
            clase="image-container__image image-container__image--vm"
          />
        </div>

        <div
          className="galeria__container galeria__container--horizontal-3"
          data-scroll
          data-scroll-speed="0"
        >
          <ImageContainer
            imgPath={props.images.horizontal3}
            clase="image-container__image image-container__image--hm"
          />
        </div>

        <div
          className="galeria__container galeria__container--horizontal-4"
          data-scroll
          data-scroll-speed="4"
        >
          <ImageContainer
            imgPath={props.images.horizontal4}
            clase="image-container__image image-container__image--hl"
          />
        </div>
      </div>
    </div>
  );
};

export default Galeria;
