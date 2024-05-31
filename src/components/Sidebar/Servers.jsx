import React from "react";
import Server from "./Server";
import images from "../../assets/images/images.js";

const Servers = () => {
  return (
    <div className="servers">
      <Server image={images.channel1} />
      <Server image={images.channel2} />
    </div>
  );
};

export default Servers;
