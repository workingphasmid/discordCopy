import React from "react";
import styles from "../../css/SidebarChannels.module.css";
import Hat from "./SidebarChannels/Hat";

const SidebarChannels = () => {
  return (
    <div className={styles["sidebar-channels"]}>
      <Hat />
      <div>middle</div>
      <div className="sidebar-channels__shoes">shoes</div>
    </div>
  );
};

export default SidebarChannels;
