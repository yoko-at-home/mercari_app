import React from 'react';
import './AppAdvertisement.styles.css';
import AppIcon from '../assets/img/app_icon.png';
import { AppStore } from '../assets/svg/';
import GooglePlay from '../assets/img/google-play-badge.png';
import AD_PHONES from '../assets/img/ad_phones.png';

export const AppAdvertisement = () => {
  return (
    <section class='app-section'>
      <div class='app-section__content'>
        <div class='app-section__icons-app-mobile'>
          <img src={AppIcon} alt='app-icon' width='50px' />
        </div>
        <div class='app-section__content-titles'>
          <div class='app-section__subtitle'>
            <h3>スマホでかんたんフリマアプリ</h3>
          </div>
          <div class='app-section__title'>
            <h2>いますぐ無料ダウンロード！</h2>
          </div>
        </div>

        <div class='app-section__icons'>
          <div class='app-section__icons-app'>
            <img src={AppIcon} alt='app-icon' />
          </div>
          <div class='app-section__icons--appstore'>
            <AppStore />
          </div>
          <div class='app-section__icons-gpstore'>
            <img src={GooglePlay} alt='google-play' />
          </div>
        </div>
      </div>

      <div class='app-section__phone-img'>
        <div>
          <img src={AD_PHONES} width='300px' alt='phone' />
        </div>
      </div>
    </section>
  );
};
