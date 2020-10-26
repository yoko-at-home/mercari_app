import React from "react";
import { Link } from "react-router-dom";
import "./AuthStyles.css";

export const NewRegistrationButton = () => {
  return (
    <Link
      to="/signup/registration"
      style={{
        display: "block",
        borderRadius: 3,
        width: "392px",
        height: "40px",
      }}
    >
      <button className="btn-text_new btn-default btn-align">
        <div className="icon-mail"></div>
        <div className="btn-text">新規会員登録</div>
      </button>
    </Link>
  );
};
