import React from "react";
import mercari_app_icon from "../assets/img/mercari_app_icon.png";
import mobile from "../assets/img/mobile.png";
import "./AppAdvertisement.css";

const AppAdvertisement = () => {
  return (
    <section class="app-section">
      <div class="app-section__content">
        <div class="app-section__icons-app-mobile">
          <img src={mercari_app_icon} alt="app-icon" width="50px" />
        </div>
        <div class="app-section__content-titles">
          <div class="app-section__subtitle">
            <h3>スマホでかんたんフリマアプリ</h3>
          </div>
          <div class="app-section__title">
            <h2>いますぐ無料ダウンロード！</h2>
          </div>
        </div>

        <div class="app-section__icons">
          <div class="app-section__icons-app">
            <img src={mercari_app_icon} alt="app-icon" width="50px" />
          </div>
          <div class="app-section__icons--appstore">
            <a href="/">app store</a>
          </div>
          <div class="app-section__icons-gpstore">
            <a href="/">google play</a>
          </div>
        </div>
      </div>

      <div class="app-section__phone-img">
        <div>
          <img src={mobile} width="300px" alt="phone" />
        </div>
      </div>
    </section>
  );
};

export default AppAdvertisement;
