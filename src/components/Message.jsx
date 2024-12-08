/* eslint-disable react/prop-types */

import { useState } from "react";

import styles from "./Message.module.css";

function Message({ title, desc }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.messageBox}>
      <div>
        <p>{title}</p>
        <img src="icons/CloseIcon.svg" alt="Close Icon" onClick={handleClose} />
      </div>
      <p>{desc}</p>
    </div>
  );
}

export default Message;
