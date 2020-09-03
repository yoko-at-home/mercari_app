import React from 'react';

// Css
import './Footer.styles.css';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='footer__sections'>
          <div className='footer__section-row'>
            <div className='footer__section'>
              <div className='footer__title'>
                <p>メルカリについて</p>
              </div>
              <div>
                <ul className='footer__items'>
                  <li className='footer__item'>会社概要　（運営会社）</li>
                  <li className='footer__item'>採用情報</li>
                  <li className='footer__item'>プレスリリース</li>
                  <li className='footer__item'>公式ブログ</li>
                  <li className='footer__item'>メルカリロゴ利用ガイドライン</li>
                </ul>
              </div>
              <div className='footer__social-medias'>
                <div className='footer__social-media--twitter'>
                  <svg className='twitter' viewBox='0 0 21 16'>
                    <path d='M6.343 15.969c7.61 0 11.773-6.134 11.773-11.444 0-.172 0-.345-.008-.517a8.303 8.303 0 0 0 2.066-2.086 8.576 8.576 0 0 1-2.38.635A4.07 4.07 0 0 0 19.616.329a8.377 8.377 0 0 1-2.63.973 4.186 4.186 0 0 0-3.019-1.27c-2.283 0-4.14 1.803-4.14 4.023 0 .314.041.62.106.918A11.866 11.866 0 0 1 1.404.769a3.936 3.936 0 0 0-.557 2.023c0 1.396.735 2.628 1.84 3.35a4.278 4.278 0 0 1-1.872-.503v.055c0 1.945 1.428 3.577 3.317 3.945-.347.094-.71.141-1.09.141-.266 0-.524-.023-.774-.07.524 1.6 2.057 2.76 3.865 2.792a8.452 8.452 0 0 1-5.14 1.725 8.19 8.19 0 0 1-.985-.054 12.02 12.02 0 0 0 6.335 1.796' />
                  </svg>
                </div>
                <div className='footer__social-media--facebook'>
                  <svg className='facebook' viewBox='0 0 16 16'>
                    <path d='M15.111 0H.89A.889.889 0 0 0 0 .889V15.11c0 .491.398.889.889.889h7.658V9.813H6.469V7.391h2.078V5.613c0-2.066 1.262-3.193 3.11-3.193.623-.002 1.244.03 1.863.096v2.15h-1.276c-1.002 0-1.197.478-1.197 1.178v1.543h2.397l-.31 2.422h-2.087V16h4.064c.491 0 .889-.398.889-.889V.89A.889.889 0 0 0 15.111 0z' />
                  </svg>
                </div>
              </div>
            </div>
            <div className='footer__section'>
              <div className='footer__title'>
                <p>メルカリについて</p>
              </div>
              <div>
                <ul className='footer__items'>
                  <li className='footer__item'>
                    <p>メルカリガイド</p>
                  </li>
                  <li className='footer__item'>
                    <p>らくらくメルカリ便</p>
                  </li>
                  <li className='footer__item'>
                    <p>ゆうゆうメルカリ便</p>
                  </li>
                  <li className='footer__item'>
                    <p>梱包・発送たのメル便</p>
                  </li>
                  <li className='footer__item'>
                    <p>車体取引ガイド</p>
                  </li>
                  <li className='footer__item'>
                    <p>メルカリあんしん・あんぜん宣言！</p>
                  </li>
                  <li className='footer__item'>
                    <p>偽ブランド品撲滅への取り組み</p>
                  </li>
                  <li className='footer__item'>
                    <p>メルカリボックス</p>
                  </li>
                  <li className='footer__item'>
                    <p>スマホ出品・売却相場</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer__section-row'>
            <div className='footer__section'>
              <div className='footer__title'>
                <p>プライバシーと利用規約</p>
              </div>
              <div>
                <ul className='footer__items'>
                  <li className='footer__item'>
                    <p>プライバシーポリシー</p>
                  </li>
                  <li className='footer__item'>
                    <p>メルカリ利用規約</p>
                  </li>
                  <li className='footer__item'>
                    <p>あんしんスマホサポート制度に関する利用特約</p>
                  </li>
                  <li className='footer__item'>
                    <p>コンプライアンスポリシー</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer__section'>
              <div className='footer__title empty'></div>
              <div>
                <ul className='footer__items'>
                  <li className='footer__item'>
                    <p>個人データの安全管理に係る基本方針</p>
                  </li>
                  <li className='footer__item'>
                    <p>特定商取引に関する表記</p>
                  </li>
                  <li className='footer__item'>
                    <p>資金決済法に基づく表示</p>
                  </li>
                  <li className='footer__item'>
                    <p>法令遵守と犯罪抑止のために</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer__section-row'>
            <div className='footer__section'>
              <div className='footer__title'>
                <p>国</p>
              </div>
              <div>
                <ul className='footer__countries'>
                  <li className='footer__item'>
                    <p>日本</p>
                  </li>
                  <li className='footer__item'>
                    <p>United States</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__section-row'>
          <div className='footer__section'>
            <div className='footer__logo-svg'>
              <svg height='31' width='124'>
                <g fill='none' fillRule='evenodd'>
                  <path d='M0-1h124v33H0z'></path>
                  <g fill='#fff' transform='translate(0 -1'>
                    <path d='M120.88 11.47h2.97v12.7h-2.97zM89.09 21.72a3.6 3.6 0 0 1-4-3.71c0-2.12 1.12-3.9 3.75-3.9a9 9 0 0 1 3.9.93v-2.77a10.24 10.24 0 0 0-4-.81A6.25 6.25 0 0 0 82.23 18c0 3.74 2.8 6.26 6.81 6.26a10.7 10.7 0 0 0 4-.81v-2.7a10.13 10.13 0 0 1-3.95.97zM50.43 11.47a4.8 4.8 0 0 0-4 2 5 5 0 0 0-4.07-2 5.37 5.37 0 0 0-5.46 5.67v7h2.92v-7.29a2.49 2.49 0 0 1 2.54-2.72A2.56 2.56 0 0 1 45 16.85v7.32h2.87v-7.32a2.51 2.51 0 0 1 2.57-2.72 2.59 2.59 0 0 1 2.67 2.72v7.32H56v-7a5.47 5.47 0 0 0-5.57-5.7z'></path>
                    <circle cx='122.36' cy='8.43' r='1.64'></circle>
                    <path
                      d='M101.84 11.47a6.21 6.21 0 0 0-6.45 6.39 6 6 0 0 0 6.18 6.39 4 4 0 0 0 3.68-2.16v2.08h2.91v-6.31c0-3.86-2.44-6.39-6.32-6.39zm0 10.21c-2.14 0-3.48-1.46-3.48-3.82a3.59 3.59 0 0 1 3.45-3.86c2.11 0 3.41 1.5 3.41 3.83a3.54 3.54 0 0 1-3.41 3.85z'
                      fillRule='nonzero'></path>
                    <path d='M79.24 14.13c-1.6 0-2.54 1.33-2.54 3.09v7h-2.92v-7a5.37 5.37 0 0 1 5.46-5.67h1.06v2.65zM116.81 14.13c-1.6 0-2.54 1.33-2.54 3.09v7h-2.92v-7a5.37 5.37 0 0 1 5.46-5.67h1v2.65z'></path>
                    <path d='M65 11.46a6.24 6.24 0 0 0-6.3 6.42c0 4 2.87 6.37 6.81 6.37a13.86 13.86 0 0 0 4.62-.82v-2.56a13.6 13.6 0 0 1-4.48 1c-2.19 0-3.72-1-4-2.93h8.88c.063-.467.093-.938.09-1.41A5.82 5.82 0 0 0 65 11.46zm-3.29 5.14a3.25 3.25 0 0 1 6.4 0z'></path>
                    <path d='M31 9.667a6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 6.5 6.5'></path>
                    <path d='M11.591 25.373l-1.392-.7V20.52c0-1.216-.745-2.233-1.748-2.35-.414-.048-.771.284-.784 1-.012.714 0 4.22 0 4.22L6.39 22.75v-3.93c0-1.735-1.12-2.283-1.61-2.336-.276-.03-.79.135-.79 1.023v4.036l-1.27-.638v-3.76c0-1.101.62-2.198 1.9-2.06 1.196.13 2.12 1.192 2.406 1.888.448-.392.858-.475 1.447-.394.654.09 3.118 1.03 3.118 4.365zm16.831-8.679a8.017 8.017 0 0 1-4.264 1.016c-4.15-.173-7.52-3.536-7.7-7.685a8.03 8.03 0 0 1 2.72-6.391.386.386 0 0 0-.085-.633l-3.466-1.735a2.518 2.518 0 0 0-2.253 0L1.382 7.267A2.497 2.497 0 0 0 0 9.499v14.002c0 .944.535 1.807 1.382 2.232l11.992 6a2.518 2.518 0 0 0 2.253 0l11.99-6A2.498 2.498 0 0 0 29 23.501v-6.47a.387.387 0 0 0-.578-.337z'></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className='footer__section'>
            <div className='footer__logo-text'>
              <p>&copy; Mercari, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
