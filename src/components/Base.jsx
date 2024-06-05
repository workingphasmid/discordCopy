import React from "react";
import SidebarChannels from "./Base/SidebarChannels";
import Chat from "./Base/Chat";
import styles from "../css/Base.module.css";

const Base = () => {
  return (
    <div className={styles.base}>
      <SidebarChannels />
      <Chat />
    </div>
  );
};

export default Base;
