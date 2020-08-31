import React from "react";
import mercari_icon_footer from "../assets/svg/mercari_icon_footer.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer__container">
        <div class="footer__grid">
          <div class="footer__about">
            <div class="footer__titles">メルカリについて</div>
            <div class="footer__content">
              <ul class="footer__list">
                <li class="footer__item">会社概要（運営会社）</li>
                <li class="footer__item">採用情報</li>
                <li class="footer__item">プレスリリース</li>
                <li class="footer__item">公式ブログ</li>
                <li class="footer__item">メルカリロゴ利用ガイドライン</li>
              </ul>
            </div>
            <div class="footer__social-icon">
              <div class="footer__twitter">
                {
                  <svg viewBox="0 0 21 16" class="twitter_svg">
                    <path
                      fill="currentColor"
                      d="M6.343 15.969c7.61 0 11.773-6.134 11.773-11.444 0-.172 0-.345-.008-.517a8.303 8.303 0 0 0 2.066-2.086 8.576 8.576 0 0 1-2.38.635A4.07 4.07 0 0 0 19.616.329a8.377 8.377 0 0 1-2.63.973 4.186 4.186 0 0 0-3.019-1.27c-2.283 0-4.14 1.803-4.14 4.023 0 .314.041.62.106.918A11.866 11.866 0 0 1 1.404.769a3.936 3.936 0 0 0-.557 2.023c0 1.396.735 2.628 1.84 3.35a4.278 4.278 0 0 1-1.872-.503v.055c0 1.945 1.428 3.577 3.317 3.945-.347.094-.71.141-1.09.141-.266 0-.524-.023-.774-.07.524 1.6 2.057 2.76 3.865 2.792a8.452 8.452 0 0 1-5.14 1.725 8.19 8.19 0 0 1-.985-.054 12.02 12.02 0 0 0 6.335 1.796"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                }
              </div>
              <div class="footer__facebook">
                {
                  <svg viewBox="0 0 16 16" class="facebook_svg">
                    <path
                      fill="currentColor"
                      d="M15.111 0H.89A.889.889 0 0 0 0 .889V15.11c0 .491.398.889.889.889h7.658V9.813H6.469V7.391h2.078V5.613c0-2.066 1.262-3.193 3.11-3.193.623-.002 1.244.03 1.863.096v2.15h-1.276c-1.002 0-1.197.478-1.197 1.178v1.543h2.397l-.31 2.422h-2.087V16h4.064c.491 0 .889-.398.889-.889V.89A.889.889 0 0 0 15.111 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                }
              </div>
              <br />
              <br />
            </div>
          </div>
          <div class="footer__help">
            <div class="footer__titles">ヘルプ＆ガイド</div>
            <ul class="footer__list">
              <li class="footer__item">メルカリガイド</li>
              <li class="footer__item">らくらくメルカリ便</li>
              <li class="footer__item">ゆうゆうメルカリ便</li>
              <li class="footer__item">梱包・発送たのメル便</li>
              <li class="footer__item">車体取引ガイド</li>
              <li class="footer__item">メルカリあんしん・あんぜん宣言！</li>
              <li class="footer__item">偽ブランド品撲滅への取り組み</li>
              <li class="footer__item">メルカリボックス</li>
              <li class="footer__item">スマホ出品・売却相場</li>
            </ul>
          </div>
          <div class="footer__privacy">
            <div class="footer__titles">プライバシーと利用規約</div>
            <ul class="footer__list">
              <li class="footer__item">プライバシーポリシー</li>
              <li class="footer__item">メルカリ利用規約</li>
              <li class="footer__item">
                あんしんスマホサポート制度に関する利用特約
              </li>
              <li class="footer__item">コンプライアンスポリシー</li>
            </ul>
          </div>
          <div class="footer__privacy">
            <div class="footer__titles">&nbsp;</div>
            <ul class="footer__list">
              <li class="footer__item">個人データの安全管理に係る基本方針</li>
              <li class="footer__item">特定商取引に関する表記</li>
              <li class="footer__item">資金決済法に基づく表示</li>
              <li class="footer__item">法令順守と犯罪抑止のために</li>
            </ul>
          </div>
          <div class="footer__country-wrapper">
            <div class="footer__titles">国</div>
            <ul class="footer__list-country">
              <li class="footer__item">
                <span class="footer__country-japan">日本</span>
              </li>
              <li class="footer__item">
                <span class="footer__country-us">United States</span>
              </li>
            </ul>
          </div>
          <div class="empty">&nbsp;</div>

          <div class="footer__label--logo">
            <img src={mercari_icon_footer} width="131px" height="31px" alt="" />
          </div>
          <div class="footer__label--copyright-mobile">
            <div class="footer__label--copyright">
              <p>© Mercari, Inc.</p>
            </div>
          </div>

          <div class="dummy"></div>
          <div class="footer__label--copyright-pc">
            <div class="footer__label--copyright">
              <p>© Mercari, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
