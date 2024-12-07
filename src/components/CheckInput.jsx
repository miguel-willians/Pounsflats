/* eslint-disable react/prop-types */

import styles from "./CheckInput.module.css";

function CheckInput({ checked, title, location, avgReview, perDay }) {
  return (
    <div className={styles.inpBox}>
      <input type="checkbox" defaultChecked={checked} />
      <div>
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
      <div>
        <span>{avgReview}</span>
        <p>Diária: {perDay}</p>
      </div>
    </div>
  );
}

export default CheckInput;
