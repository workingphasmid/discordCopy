import React from "react";
import Hat from "./SidebarChannels/Hat";
import Shirt from "./SidebarChannels/Shirt";
import icons from "../../assets/icons/icons.js";

const SidebarChannels = () => {
  return (
    <div className="sidebar-channels">
      <Hat />
      <Shirt />
      <div className="sidebar-channels__shoes">
        <div className="sidebar-channels__profile">
          <img className="sidebar-channels__profile-picture" />
          <div className="sidebar-channels__profile-wrapper">
            <p className="sidebar-channels__name">blob</p>
            <p className="sidebar-channels__status">invisible</p>
          </div>
        </div>
        <div className="sidebar-channels__shoes-controls">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SidebarChannels;
