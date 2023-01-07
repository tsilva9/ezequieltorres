const ImageContainer = (props) => {
  return (
    <div className="image-container">
      <img src={props.imgPath} alt="Foto" className={props.clase} />
    </div>
  );
};

export default ImageContainer;
