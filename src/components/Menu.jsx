import HomeIcon from "../assets/icons/HomeIcon.jsx";
import ReservationsIcon from "../assets/icons/ReservationsIcon.jsx";
import HistoricIcon from "../assets/icons/HistoricIcon.jsx";
import ChatIcon from "../assets/icons/ChatIcon.jsx";
import ProfileIcon from "../assets/icons/ProfileIcon.jsx";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <HomeIcon />
        </li>
        <li>
          <ReservationsIcon />
        </li>
        <li>
          <HistoricIcon />
        </li>
        <li>
          <ChatIcon />
        </li>
        <li>
          <ProfileIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
