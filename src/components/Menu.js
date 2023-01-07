import "../css/style.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

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
      <li data-splitting className="menu__fila menu__fila--1">
        Principal
      </li>
      <li data-splitting className="menu__fila menu__fila--2">
        Visuales
      </li>
      <li data-splitting className="menu__fila menu__fila--3">
        Flyers
      </li>
    </ul>
  );
};

export default Menu;
