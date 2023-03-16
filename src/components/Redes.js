import "../css/style.css";

const Redes = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const mouseEnter = () => {
    document.getElementById("cursor").classList.add("custom-cursor--active");
  };

  const mouseLeave = () => {
    document.getElementById("cursor").classList.remove("custom-cursor--active");
  };

  return (
    <div className="redes">
      <p
        className="redes__red"
        onClick={() =>
          openInNewTab("https://www.instagram.com/ezequielltorres/")
        }
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        Instagram
      </p>
      <p
        className="redes__red"
        onClick={() => openInNewTab("https://www.behance.net/ezequielltorres")}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        Behance
      </p>
      <p
        className="redes__red"
        onClick={() =>
          openInNewTab("https://www.facebook.com/ezequiel.torresredon")
        }
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        Facebook
      </p>
    </div>
  );
};

export default Redes;
