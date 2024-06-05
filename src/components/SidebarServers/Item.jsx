import React from "react";
import styles from "../../css/SidebarServers.module.css";

const Item = ({ icon }) => {
  return (
    <div className={styles.item}>
      <img src={icon} alt="" className="item__icon" />
    </div>
  );
};

export default Item;
