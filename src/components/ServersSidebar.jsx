import React from "react";
import Servers from "./ServersSidebar/Servers.jsx";
import Item from "./ServersSidebar/Item.jsx";
import icons from "../assets/icons/icons.js";
import Separator from "./ServersSidebar/Separator.jsx";

import styles from "../css/ServersSidebar.module.css";

const ServersSidebar = () => {
  return (
    <div className={styles["servers-sidebar"]}>
      <Item icon={icons.discordWhite} />
      <Separator />
      <Servers />
      <Item icon={icons.plusGreen} />
      <Item icon={icons.discoverGreen} />
      <Separator />
      <Item icon={icons.downloadGreen} />
    </div>
  );
};

export default ServersSidebar;
