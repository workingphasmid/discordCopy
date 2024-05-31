import React from "react";

const Item = ({ icon }) => {
  return (
    <div className="item">
      <img src={icon} alt="" className="item__icon" />
    </div>
  );
};

export default Item;
