import React from "react";
import Server from "./Server";
import images from "../../assets/images/images.js";
import styles from "../../css/ServersSidebar.module.css";

const Servers = () => {
  return (
    <div className={styles.servers}>
      <Server image={images.channel1} />
      <Server image={images.channel2} />
    </div>
  );
};

export default Servers;
