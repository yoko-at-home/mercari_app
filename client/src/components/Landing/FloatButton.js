import React from "react";
import "./FloatButton.styles.css";
import { Camera } from "../../assets/svg";
import {Link} from 'react-router-dom'

export const FloatButton = () => {
  return (
    <button className="float-button">
          <Link to="./items/sell">
      <div className="float-button__inner">
        <div className="float-button__text">
          <p>出品</p>
        </div>
        <div className="float-button__icon">
          <Camera />
        </div>
      </div>
          </Link>
    </button>
  );
};
