import React from "react";
import "./ProgressBar.styles.css";

const ProgressBar = () => {
  return (
    <>
      <nav className="progress-bar signup-bar">
        <ol className="clearfix">
          <li className="active">
            会員情報
            <div className="progress-status"></div>
          </li>
          <li className="">
            電話番号認証
            <div className="progress-status"></div>
          </li>
          <li className="">
            完了
            <div className="progress-status"></div>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default ProgressBar;
