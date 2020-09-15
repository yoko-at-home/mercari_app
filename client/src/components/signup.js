import React from "react";

import "../index.css";
import "./signup.styles.css";
import { appleIcon } from "../assets/svg/";
import { envelopeIcon } from "../assets/svg/";
import { logoIcon } from "../assets/svg/";
import { logoGrayIcon } from "../assets/svg/";
import { facebookIcon } from "../assets/svg/";
import { googleIcon } from "../assets/svg/";

export const signupPage = () => {
  return (
    <div class="wrapper">
      <header class="single-header">
        <img src="img/logo.svg" alt="" />
      </header>
      <div class="main">
        <div class="section__top">
          <div class="l-single-head">新規会員登録</div>
        </div>
        <div class="section__center">
          <ul class="btn__wrap">
            <li class="list__btn">
              <button class="btn-mail btn-default btn-align">
                <div class="icon-mail">
                  <envelopeIcon />
                </div>
                <div class="btn-text">メールアドレスで登録する</div>
              </button>
            </li>
            <li class="list__btn">
              <button class="btn-google btn-default btn-align">
                <div class="icon-mail">
                  <googleIcon />
                </div>
                <div class="btn-text">Googleで登録する</div>
              </button>
            </li>
            <li class="list__btn">
              <button class="btn-facebook btn-default btn-align">
                <div class="icon-mail">
                  {/* <facebookIcon /> */}
                  <i class="fab fa-facebook-square"></i>
                </div>
                <div class="btn-text">Facebookで登録する</div>
              </button>
            </li>
            <li class="list__btn">
              <div class="btn-apple btn-default btn-align">
                <div class="icon-mail">
                  <appleIcon />
                </div>
                <div class="btn-text">Appleで登録する</div>
              </div>
            </li>
            <li>
              <div class="btn-text__bottom">
                登録することで、<a href="">利用規約とプライバシーポリシー</a>
                に同意したものとみなされます。
              </div>
            </li>
          </ul>
        </div>
        <div class="footer__container">
          <ul class="footer--items">
            <li>プライバシーポリシー</li>
            <li>メルカリ利用規約</li>
            <li>特定商取引に関する表記</li>
          </ul>
          <div>
            <img class="footer__img" src="img/logo-gray.svg" alt="" />
          </div>
          <div class="footer--copyright">&copy; Mercari, Inc.</div>
        </div>
      </div>
    </div>
  );
};
