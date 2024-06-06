import React from "react";
import Channel from "./Channel";
import icons from "../../../assets/icons/icons.js";

const Channels = () => {
  return (
    <div className="sidebar-channels__channels">
      <div className="sidebar-channels__container-channels">
        <img src={icons.dropdownGrey200} alt="" className="container-channels__dropdown" />
        <h5 className="container-channels__title">GARDERNERS' ASSOCIATION</h5>
      </div>
    </div>
  );
};

export default Channels;
