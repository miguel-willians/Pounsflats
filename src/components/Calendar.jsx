import styles from "./Calendar.module.css";

import DatepickerMenu from "../assets/icons/DatepickerMenu.svg";

function Calendar() {
  return (
    <div className={styles.calendar}>
      <img src={DatepickerMenu} alt="Datepicker menu" />
    </div>
  );
}

export default Calendar;
