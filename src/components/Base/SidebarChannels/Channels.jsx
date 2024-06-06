import React from "react";
import Channel from "./Channel";
import icons from "../../../assets/icons/icons.js";

const Channels = () => {
  return (
    <div className="sidebar-channels__channels">
      <div className="sidebar-channels__container-channels">
        <img src={icons.dropdownGrey200} alt="" className="container-channels__dropdown" />
        <div className="container-channels__title">Gardener's Association</div>
      </div>
    </div>
  );
};

export default Channels;
