import HomeIcon from "../assets/icons/HomeIcon.svg";
import ReservationsIcon from "../assets/icons/ReservationsIcon.svg";
import HistoricIcon from "../assets/icons/HistoricIcon.svg";
import ChatIcon from "../assets/icons/ChatIcon.svg";
import ProfileIcon from "../assets/icons/ProfileIcon.svg";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <img src={HomeIcon} alt="Ícone da homepage" />
        </li>
        <li>
          <img src={ReservationsIcon} alt="Ícone da página de reserva" />
        </li>
        <li>
          <img src={HistoricIcon} alt="Ícone da página de histórico" />
        </li>
        <li>
          <img src={ChatIcon} alt="Ícone da página de chat" />
        </li>
        <li>
          <img src={ProfileIcon} alt="Ícone da página de perfil" />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
