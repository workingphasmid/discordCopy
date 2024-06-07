import React from "react";
import Hat from "./Chat/Hat";
import Shirt from "./Chat/Shirt";
import InputMessage from "./Chat/InputMessage";

const Chat = () => {
  return (
    <div className="chat">
      <Hat />
      <Shirt />
      <InputMessage />
    </div>
  );
};

export default Chat;
