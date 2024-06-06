import React from "react";

const Channel = ({ icon, title }) => {
  return (
    <li className="sidebar-channels__channel">
      <img src={icon} alt="" className="channel__icon" />
      <h3 className="channel__title">{title}</h3>
    </li>
  );
};

export default Channel;
