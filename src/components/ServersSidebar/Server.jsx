import React from "react";
import styles from "../../css/ServersSidebar.module.css";

const Server = ({ image }) => {
  return <img src={image} alt="" className={styles.server} />;
};

export default Server;
