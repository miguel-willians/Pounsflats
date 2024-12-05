import HomeIcon from "../assets/icons/HomeIcon.jsx";
import ReservationsIcon from "../assets/icons/ReservationsIcon.jsx";
import HistoricIcon from "../assets/icons/HistoricIcon.jsx";
import ChatIcon from "../assets/icons/ChatIcon.jsx";
import ProfileIcon from "../assets/icons/ProfileIcon.jsx";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

function Menu() {
  const getActiveClass = ({ isActive }) => (isActive ? styles.active : "");

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">
            <HomeIcon className={getActiveClass} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations">
            <ReservationsIcon className={getActiveClass} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/historic">
            <HistoricIcon className={getActiveClass} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat">
            <ChatIcon className={getActiveClass} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <ProfileIcon className={getActiveClass} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
