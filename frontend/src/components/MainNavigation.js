import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a>
              <Link to={"/"}>Home</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/events"}>Events</Link>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
