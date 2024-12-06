/* eslint-disable react/prop-types */

import styles from "./Message.module.css";

import CloseIcon from "../assets/icons/CloseIcon.svg";

function Message({ title, desc }) {
  return (
    <div className={styles.messageBox}>
      <div>
        <p>{title}</p>
        <img src={CloseIcon} alt="Close Icon" />
      </div>
      <p>{desc}</p>
    </div>
  );
}

export default Message;
