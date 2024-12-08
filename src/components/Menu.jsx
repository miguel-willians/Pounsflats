import { NavLink } from "react-router-dom";

import HomeIcon from "../assets/menu_icons/HomeIcon.jsx";
import ReservationsIcon from "../assets/menu_icons/ReservationsIcon.jsx";
import HistoricIcon from "../assets/menu_icons/HistoricIcon.jsx";
import ChatIcon from "../assets/menu_icons/ChatIcon.jsx";
import ProfileIcon from "../assets/menu_icons/ProfileIcon.jsx";

import styles from "./Menu.module.css";

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
