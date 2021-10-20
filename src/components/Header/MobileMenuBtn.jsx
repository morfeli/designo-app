import React from "react";
import "./styles/MobileMenuBtn.scss";

const MobileMenuBtn = () => {
  return (
    <label>
      <input type="checkbox" />
      <div className="toggle-button">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
    </label>
  );
};

export default MobileMenuBtn;
