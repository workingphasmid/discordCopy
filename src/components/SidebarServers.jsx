import React from "react";
import Servers from "./SidebarServers/Servers.jsx";
import Item from "./SidebarServers/Item.jsx";
import icons from "../assets/icons/icons.js";
import Separator from "./SidebarServers/Separator.jsx";

import styles from "../css/SidebarServers.module.css";

const SidebarServers = () => {
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

export default SidebarServers;
