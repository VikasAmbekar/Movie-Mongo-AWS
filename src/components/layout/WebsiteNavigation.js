import { Link } from "react-router-dom";
//import classes from "./WebsiteNavigation1.css";
import "./WebsiteNavigation1.css";

function WebsiteNavigation() {
  return (
    <header className="header">
      <div className="logo"> Movie App </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <b>Home Page</b>
            </Link>{" "}
          </li>
          <li>
            <Link to="/newmovie">
              <b>New Movies</b>
            </Link>{" "}
          </li>
          <li>
            <Link to="/fav">
              <b>Favourite Movies</b>
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default WebsiteNavigation;
