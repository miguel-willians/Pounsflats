import styles from "./Rental.module.css";

import StarIcon from "../assets/icons/StarIcon.svg";
import Home from "/src/assets/images/home.png";

function Rental() {
  return (
    <li className={styles.rental}>
      <img src={Home} alt="Rental image" />
      <section>
        <div>
          <h2>Poundsflats Aquário</h2>
          <div className={styles.rating}>
            <img src={StarIcon} />
            <p>4,5</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>Santos, SP</p>
          <p>Diária: R$97</p>
        </div>
      </section>
    </li>
  );
}

export default Rental;
