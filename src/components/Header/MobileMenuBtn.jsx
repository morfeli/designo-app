import React, { useEffect } from "react";
import "./styles/MobileMenuBtn.scss";

const MobileMenuBtn = (props) => {
  let toggleControl = "toggle-button";

  useEffect(() => {
    if (!props.active) {
      document.getElementById("checkbox").checked = false;
    }
  }, [props]);
  return (
    <label>
      <input type="checkbox" id="checkbox" />
      <div className={toggleControl} onClick={props.event}>
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
    </label>
  );
};

export default MobileMenuBtn;
