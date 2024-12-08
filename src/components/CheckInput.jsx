/* eslint-disable react/prop-types */

import styles from "./CheckInput.module.css";

function CheckInput({ checked, title, location, avgReview, perDay }) {
  return (
    <div className={styles.inpBox}>
      {checked ? (
        <img src="/icons/Checkbox.svg" alt="Checkbox" />
      ) : (
        <img src="/icons/CheckboxUncheked.svg" alt="Checkbox unchecked" />
      )}
      <div>
        <div className={styles.details}>
          <div>
            <h3>{title}</h3>
            <div>
              <img src="/icons/StarIcon.svg" alt="Star Icon" />
              <p> {avgReview}</p>
            </div>
          </div>
          <div>
            <p>{location}</p>
            <p>Diária: {perDay}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckInput;
