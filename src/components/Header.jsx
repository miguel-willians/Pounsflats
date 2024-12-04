/* eslint-disable react/prop-types */
import styles from "./Header.module.css";

function Header({ children }) {
  return <header className={styles.header}>{children}</header>;
}

export default Header;
