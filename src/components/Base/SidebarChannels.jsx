import React from "react";
import Hat from "./SidebarChannels/Hat";
import Shirt from "./SidebarChannels/Shirt";
import icons from "../../assets/icons/icons.js";

import images from "../../assets/images/images.js";

const SidebarChannels = () => {
  return (
    <div className="sidebar-channels">
      <Hat />
      <Shirt />
      <div className="sidebar-channels__shoes">
        <div className="sidebar-channels__profile">
          <img className="sidebar-channels__profile-picture" src={images.profile} />
          <div className="sidebar-channels__profile-wrapper">
            <p className="sidebar-channels__name">Blob</p>
            <p className="sidebar-channels__status">invisible</p>
          </div>
        </div>
        <div className="sidebar-channels__shoes-controls">
          <img src={icons.micRed400} alt="" />
          <img src={icons.headphoneGrey300} alt="" />
          <img src={icons.settingGrey300} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SidebarChannels;
