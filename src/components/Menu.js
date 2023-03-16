import "../css/style.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { mouseEnter, mouseLeave } from "../utils/mouseLeaveEnter";
import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  var s = Splitting({
    /* target: String selector, Element, Array of Elements, or NodeList */
    target: "[data-splitting]",
    /* by: String of the plugin name */
    by: "chars",
    /* key: Optional String to prefix the CSS variables */
    key: null,
  });

  return (
    <ul className="menu">
      <li
        data-splitting
        className="menu__fila menu__fila--1"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <Link to={"/"} className="menu__link">
          Principal
        </Link>
      </li>
      <li
        data-splitting
        className="menu__fila menu__fila--2"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <Link to={"/visuales"} className="menu__link">
          Visuales
        </Link>
      </li>
      <li
        data-splitting
        className="menu__fila menu__fila--3"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <Link to={"/otros"} className="menu__link">
          Otros
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
