import React from "react";
import Item from "./Scroller/Item";
import resources from "../assets/resources.js";

const Scroller = () => {
  return (
    <div className="scroller">
      <Item icon={resources.icons.discord} />
      <Item icon={resources.images.channel1} />
      <Item icon={resources.images.channel2} />
    </div>
  );
};

export default Scroller;
