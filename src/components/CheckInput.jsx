/* eslint-disable react/prop-types */

import styles from "./CheckInput.module.css";

import StarIcon from "../assets/icons/StarIcon.svg";
import Checkbox from "../assets/icons/Checkbox.svg";
import CheckboxUncheked from "../assets/icons/CheckboxUncheked.svg";

function CheckInput({ checked, title, location, avgReview, perDay }) {
  return (
    <div className={styles.inpBox}>
      {checked ? (
        <img src={Checkbox} alt="Checkbox" />
      ) : (
        <img src={CheckboxUncheked} alt="Checkbox unchecked" />
      )}
      <div>
        <div className={styles.details}>
          <div>
            <h3>{title}</h3>
            <div>
              <img src={StarIcon} alt="Star Icon" />
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
