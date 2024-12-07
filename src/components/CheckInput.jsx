/* eslint-disable react/prop-types */

import styles from "./CheckInput.module.css";

import StarIcon from "../assets/icons/StarIcon.svg";

function CheckInput({ checked, title, location, avgReview, perDay }) {
  return (
    <div className={styles.inpBox}>
      <input type="checkbox" defaultChecked={checked} id={styles.checkbox} />
      <div>
        <div>
          <div>
            <h3>{title}</h3>
            <div>
              <img src={StarIcon} alt="Star Icon" />
              {avgReview}
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
