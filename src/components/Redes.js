import "../css/style.css";
import { mouseEnter, mouseLeave } from "../utils/mouseLeaveEnter";

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
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        instagram
      </p>
      <p
        className="redes__red"
        onClick={() => openInNewTab("https://www.behance.net/ezequielltorres")}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        behance
      </p>
      <p
        className="redes__red"
        onClick={() =>
          openInNewTab("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=ezequieltorres26@gmail.com")
        }
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        gmail
      </p>
    </div>
  );
};

export default Redes;
