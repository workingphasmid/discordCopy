import React from "react";
import Servers from "../components/Sidebar/Servers";
import Item from "./Sidebar/Item";
import icons from "../assets/icons/icons.js";
import Separator from "./Sidebar/Separator.jsx";

const Sidebar = () => {
  return (
    <div className="sidebar">
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

export default Sidebar;
