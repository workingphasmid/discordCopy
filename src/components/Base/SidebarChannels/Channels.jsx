import React from "react";
import Channel from "./Channel";
import icons from "../../../assets/icons/icons.js";

const Channels = () => {
  return (
    <div className="sidebar-channels__channels">
      <div className="sidebar-channels__container-channels">
        <img className="container-channels__dropdown" src={icons.dropdownGrey200}></img>
      </div>
    </div>
  );
};

export default Channels;
