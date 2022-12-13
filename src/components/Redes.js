import "../css/style.css";

const Redes = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="redes">
      <p
        className="redes__red"
        onClick={() =>
          openInNewTab("https://www.instagram.com/ezequielltorres/")
        }
      >
        Instagram
      </p>
      <p
        className="redes__red"
        onClick={() => openInNewTab("https://www.behance.net/ezequielltorres")}
      >
        Behance
      </p>
      <p
        className="redes__red"
        onClick={() =>
          openInNewTab("https://www.facebook.com/ezequiel.torresredon")
        }
      >
        Facebook
      </p>
    </div>
  );
};

export default Redes;
