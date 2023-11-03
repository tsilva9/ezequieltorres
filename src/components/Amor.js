import { mouseEnter, mouseLeave } from "../utils/mouseLeaveEnter";

const Amor = (props) => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <a href="https://www.instagram.com/tomisilva9/" className="amor" onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}> {currentYear}, hecho con amor 🖤</a>
    );
}

export default Amor;