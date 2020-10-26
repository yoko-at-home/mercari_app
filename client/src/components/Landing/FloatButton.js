import React from "react";
import "./FloatButton.styles.css";
import { Camera } from "../../assets/svg";

export const FloatButton = () => {
  return (
    <button className="float-button">
      <div className="float-button__inner">
        <div className="float-button__text">
          <p>出品</p>
        </div>
        <div className="float-button__icon">
          <Camera />
        </div>
      </div>
    </button>
  );
};
