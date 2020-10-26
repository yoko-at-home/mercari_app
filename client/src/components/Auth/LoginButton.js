import React from "react";
import { Link } from "react-router-dom";
import "./AuthButton.styles.css";

export const LoginButton = () => {
  return (
    <Link
      to="/signup/registration"
      style={{
        display: "block",
        borderRadius: 3,
        backgroundColor: "#EA352E",
        border: "1px solid #EA352E",
      }}
    >
      <button className="btn-mail_signup btn-default btn-align">
        <div className="icon-mail"></div>
        <div className="btn-text">ログイン</div>
      </button>
    </Link>
  );
};
