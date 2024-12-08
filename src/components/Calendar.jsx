import styles from "./Calendar.module.css";

function Calendar() {
  return (
    <div className={styles.calendar}>
      <img src="/icons/DatepickerMenu.svg" alt="Datepicker menu" />
    </div>
  );
}

export default Calendar;
