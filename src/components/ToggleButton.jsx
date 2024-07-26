import React, { useState } from "react";
import styles from "@/styles/ToggleButton.module.scss"; // Adjust the path if necessary

const ToggleButton = () => {
  const [isClientPresent, setIsClientPresent] = useState(false);

  const toggleClientPresence = () => {
    setIsClientPresent(!isClientPresent);
  };

  return (
    <div className={styles.togglecontainer} >
      <div onClick={toggleClientPresence}
        className={`${styles.toggleButton} ${
          isClientPresent ? styles.present : styles.absent
        }`}
      >
        <div
          className={`${styles.togglecircle} ${
            isClientPresent ? styles.present : styles.absent
          }`}
        ></div>
      </div>
      <span className={styles.toggletext}>
        {isClientPresent ? "Client Present" : "Client Non Present"}
      </span>
    </div>
  );
};

export default ToggleButton;
