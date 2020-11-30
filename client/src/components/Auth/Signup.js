import React from "react";
import { Link } from "react-router-dom";
// import {Authentsstration } from "./components/Auth/Registration";

import "../../styles/global.css";
import "./AuthStyles.css";
import { EmailButton } from "./EmailButton";
import { FacebookButton } from "./FacebookButton";
import { GoogleButton } from "./GoogleButton";
import { AppleButton } from "./AppleButton";

export const Signup = () => {
  return (
    <div className="SectionCenter">
      <div className="main">
        <div className="section__top">
          <div className="l-single-head">新規会員登録</div>
        </div>
        <div className="section__center">
          <ul className="btn__wrap">
            <li className="list__btn">
              <EmailButton />
            </li>
            <li className="list__btn">
              <GoogleButton />
            </li>
            <li className="list__btn">
              <FacebookButton />
            </li>
            <li className="list__btn">
              <AppleButton />
            </li>
            <li>
              <div className="btn-text__bottom">
                登録することで、
                <Link to="">利用規約とプライバシーポリシー</Link>
                に同意したものとみなされます。
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
