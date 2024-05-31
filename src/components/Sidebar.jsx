import React from "react";
import Servers from "../components/Sidebar/Servers";
import Item from "./Sidebar/Item";
import icons from "../assets/icons/icons.js";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Item icon={icons.discordWhite} />
      <Servers />
      <Item icon={icons.plusGreen} />
      <Item icon={icons.discoverGreen} />
      <Item icon={icons.downloadGreen} />
    </div>
  );
};

export default Sidebar;
