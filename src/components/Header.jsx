import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import ArrowIcon from "../assets/icons/ArrowIcon.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={ArrowIcon} alt="Botão retornar" />
      <NavLink to="/">+ Cadastrar Imóvel</NavLink>
    </header>
  );
}

export default Header;
