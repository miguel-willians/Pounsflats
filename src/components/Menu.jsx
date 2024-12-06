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
          <NavLink to="/" className={getActiveClass}>
            <HomeIcon className={styles.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations" className={getActiveClass}>
            <ReservationsIcon className={styles.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/historic" className={getActiveClass}>
            <HistoricIcon className={styles.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat" className={getActiveClass}>
            <ChatIcon className={styles.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={getActiveClass}>
            <ProfileIcon className={styles.icon} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
