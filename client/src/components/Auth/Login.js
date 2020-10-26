import React from "react";
import { Link } from "react-router-dom";
import "./AuthStyles.css";

import "../../styles/global.css";
import "./AuthStyles.css";
import { NewRegistrationButton } from "./NewRegistrationButton";
import { FacebookButton } from "./FacebookButton";
import { GoogleButton } from "./GoogleButton";
import { AppleButton } from "./AppleButton";
import { LoginButton } from "./LoginButton";
import { LoginForm } from "./LoginForm";
// import { LoginCaptchaBlock } from "./LoginCaptchaBlock";

export const LoginPage = () => {
  return (
    <>
      <div className="main__no-account">
        <ul className="btn__wrap">
          <div className="main__text">アカウントをお持ちでない方はこちら</div>
          <li className="list__btn">
            <Link to="./Signup">
              <NewRegistrationButton />
            </Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="section__center">
          <ul className="btn__wrap">
            <li className="list__btn">
              <GoogleButton />
            </li>
            <li className="list__btn">
              <FacebookButton />
            </li>
            <li className="list__btn">
              <AppleButton />
            </li>
          </ul>
          <ul className="btn__wrap">
            <li className="list__btn">
              <div className="btn-text__bottom">
                <LoginForm />
              </div>
            </li>
            <li className="list__btn">
              <LoginButton />
            </li>
            <li className="list__btn">{/* <LoginCaptchaBlock /> */}</li>
            <li className="list__btn">
              <Link to="https://www.mercari.com/jp/password/reset/start/">
                パスワードをお忘れの方
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
