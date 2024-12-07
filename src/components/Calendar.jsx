import LeftArrowIcon from "../assets/icons/LeftArrowIcon.svg";
import RightArrowIcon from "../assets/icons/RightArrowIcon.svg";

function Calendar() {
  return (
    <div>
      <div>
        <img src={LeftArrowIcon} alt="Left Arrow Icon" />
        <p>June 2021</p>
        <img src={RightArrowIcon} alt="Left Arrow Icon" />
      </div>
    </div>
  );
}

export default Calendar;
