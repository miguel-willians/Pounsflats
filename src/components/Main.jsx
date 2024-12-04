/* eslint-disable react/prop-types */

import styles from "./Main.module.css";

function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;
