import React from "react";

const InputMessage = () => {
  return (
    <div className="input-message">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24" className="input-message__icon">
        <circle cx="12" cy="12" r="10" fill="transparent"></circle>
        <path fill="" fillRule="evenodd" d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z" clipRule="evenodd"></path>
      </svg>
      <div className="input-message__container-input">
        <input type="text" className="input-message__input" />
      </div>
      <div className="input-message__right"></div>
    </div>
  );
};

export default InputMessage;
