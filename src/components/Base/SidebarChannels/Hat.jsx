import React from "react";
import styles from "../../../css/SidebarChannels.module.css";
import icons from "../../../assets/icons/icons.js";

const Hat = () => {
  return (
    <div className={styles.hat}>
      <h4 className={styles.title}>Baka STI yan</h4>
      <div className={styles.dropdown}>
        <img src={icons.dropdownGrey} className={styles.icon} />
      </div>
    </div>
  );
};

export default Hat;
