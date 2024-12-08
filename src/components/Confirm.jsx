/* eslint-disable react/prop-types */
import Button from "./Button";

import styles from "./Confirm.module.css";

import { NavLink } from "react-router-dom";

function Confirm({ onContinue, question, option1, option2, link1 }) {
  return (
    <div className={styles.exitBox}>
      <img src="/icons/Indicator.svg" alt="Indicator" onClick={onContinue} />
      <div>
        <p>{question}</p>
        <NavLink to={link1}>
          <Button type="default">{option1}</Button>
        </NavLink>
        <Button type="secondary" onClick={onContinue}>
          {option2}
        </Button>
      </div>
    </div>
  );
}

export default Confirm;
