import styles from "./Rental.module.css";

function Rental() {
  return (
    <li className={styles.rental}>
      <img src="images/home.png" alt="Rental image" />
      <section>
        <div>
          <h2>Poundsflats Aquário</h2>
          <div className={styles.rating}>
            <img src="icons/StarIcon.svg" alt="Star Icon" />
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
