import "../css/style.css";
import Menu from "./Menu";
import { useState } from "react";

const Navbar = () => {
  const [isPressed, setIsPressed] = useState(false);
  const clase = isPressed ? "--is-active" : "";

  const handleButton = (e) => {
    setIsPressed(!isPressed);
  };

  const mouseEnter = () => {
    document.getElementById("cursor").classList.add("custom-cursor--active");
  };

  const mouseLeave = () => {
    document.getElementById("cursor").classList.remove("custom-cursor--active");
  };

  return (
    <div className={`navbar${clase}`}>
      <div className={`navbar__menu-container${clase}`}>
        <Menu />
      </div>

      {/* Cambiar color de fondo */}
      <button
        onClick={handleButton}
        className={`navbar__button${clase}`}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      ></button>
    </div>
  );
};

export default Navbar;
