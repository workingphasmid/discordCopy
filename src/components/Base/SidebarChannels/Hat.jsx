import React from "react";
import icons from "../../../assets/icons/icons.js";

const Hat = () => {
  return (
    <div className="sidebar-channels__hat">
      <h4 className="sidebar-channels__title">Baka STI yan</h4>
      <div className="sidebar-channels__dropdown">
        <img src={icons.dropdownGrey} />
      </div>
    </div>
  );
};

export default Hat;
