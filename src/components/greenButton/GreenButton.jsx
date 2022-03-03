import React from "react";
import "./GreenButton.css";

function GreenButton({ greenBtnTitle, handleBtnClick }) {
  return (
    <div className='green-button' onClick={handleBtnClick}>
      {greenBtnTitle}
    </div>
  );
}

export default GreenButton;
