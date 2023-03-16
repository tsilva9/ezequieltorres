import "../css/style.css";

const Triptico = (props) => {
  return (
    <div className="triptico">
      <img
        src={props.imagenes.img1}
        alt=""
        className="triptico__img triptico__img--1"
      />
      <img
        src={props.imagenes.img2}
        alt=""
        className="triptico__img triptico__img--2"
      />
      <img
        src={props.imagenes.img3}
        alt=""
        className="triptico__img triptico__img--3"
      />
    </div>
  );
};

export default Triptico;
