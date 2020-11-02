import React from "react";
import { Link } from "react-router-dom";
import "./AuthButton.styles.css";

export const NewRegistrationButton = () => {
  return (
    <Link
      to="/signup/registration"
      style={{
        display: "block",
        borderRadius: 3,
        border: "1px solid black",
        backgroundColor: "transparent",
      }}
    >
      <button className="btn-new btn-default btn-align">
        <div className="icon-mail"></div>
        <div className="btn-text">新規会員登録</div>
      </button>
    </Link>
  );
};
