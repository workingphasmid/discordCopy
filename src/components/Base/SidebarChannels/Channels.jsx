import React from "react";
import Channel from "./Channel";
import icons from "../../../assets/icons/icons.js";

const Channels = () => {
  return (
    <div className="sidebar-channels__channels">
      <div className="sidebar-channels__accordion-channels">
        <img src={icons.dropdownGrey200} alt="" className="accordion-channels__dropdown" />
        <h5 className="accordion-channels__title">GARDERNERS' ASSOCIATION</h5>
      </div>
      <ul className="sidebar-channels__container-channels">
        <Channel icon={icons.hashtagGrey200} title={"let-him-plant"} />
        <Channel icon={icons.hashtagGrey200} title={"bot-commands"} />
        <Channel icon={icons.soundGrey200} title={"🎉 | VC"} />
      </ul>
    </div>
  );
};

export default Channels;
