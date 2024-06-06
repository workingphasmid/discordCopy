import React from "react";
import images from "../../../assets/images/images.js";

const Message = () => {
  return (
    <div className="chat-shirt__message">
      <img src={images.profile} alt="" className="chat-shirt__picture" />
      <div className="chat-shirt__details">
        <div className="chat-shirt__meta">
          <p className="chat-shirt__name">Blob</p>
          <span className="chat-shirt__date">Today at 8:05 PM</span>
        </div>
        <p className="chat-shirt__details-message">Plans for this weekend include turning wine into water.</p>
      </div>
    </div>
  );
};

export default Message;
