import React from "react";
import icons from "../../../assets/icons/icons.js";
import ChatHatActions from "./ChatHatActions.jsx";

const Hat = () => {
  return (
    <div className="chat-hat">
      <div className="chat-hat__channel">
        <img src={icons.hashtagGrey200} alt="" className="chat-hat__icon" />
        <p className="chat-hat__name">let-him-plant</p>
      </div>
      <ChatHatActions />
    </div>
  );
};

export default Hat;
