import React from "react";
import styles from "../../css/SidebarChannels.module.css";
import Hat from "./SidebarChannels/Hat";
import Shirt from "./SidebarChannels/Shirt";

const SidebarChannels = () => {
  return (
    <div className={styles["sidebar-channels"]}>
      <Hat />
      <Shirt />
      <div className="sidebar-channels__shoes">shoes</div>
    </div>
  );
};

export default SidebarChannels;
