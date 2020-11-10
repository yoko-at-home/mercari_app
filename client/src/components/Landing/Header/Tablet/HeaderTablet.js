import React from "react";
import { Link } from "react-router-dom";
import jwt from 'jsonwebtoken';

import "./HeaderTablet.styles.css";

import Logo from "../../../../assets/img/mercari_logo.png";

const HeaderButtons = () => {
  <div className="header__buttons">
  <div className="header__button--register">
    <button>
      <Link to="/signup">新規会員登録</Link>
    </button>
  </div>
  <div className="header__button--login">
    <button>
      <Link to="/login">ログイン</Link>
    </button>
      </div>
    </div>
}

export const HeaderTablet = () => {
  const displayButtons = () => {
    // tokenがlocalstorageにあるか確認
    const token = localStorage.getItem('token');
    // tokenが存在していないか確認する
    if (token === null) {
      return(
        HeaderButtons()
      );
    }
    // tokenが存在してる
    // err -> エラーの内容（エラー処理に使う）
    // decoded -> 解読された内容
    return jwt.verify(token, 'mercari', (err, decoded) => {
      if (err) {
        return (
          HeaderButtons()
      );
    }
      return <p>ようこそ、{decoded.nickname}さん</p>;
  });
  };
  return (
      <header className='header--tablet'>
        <div className='header__inner--tablet'>
          <div className='header__top--tablet'>
            <div className='header__logo'>
              <img src={Logo} width='130px' alt='logo' />
            </div>
            <div className='header__input'>
              <input placeholder='何かお探しですか？' />
              <button>
                <svg
                  aria-hidden='true'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill='currentColor'
                    fillRule='nonzero'
                    d='M11.435 10.063h-.723l-.256-.247a5.92 5.92 0 0 0 1.437-3.87 5.946 5.946 0 1 0-5.947 5.947 5.92 5.92 0 0 0 3.87-1.437l.247.256v.723L14.637 16 16 14.637l-4.565-4.574zm-5.489 0A4.111 4.111 0 0 1 1.83 5.946 4.111 4.111 0 0 1 5.946 1.83a4.111 4.111 0 0 1 4.117 4.116 4.111 4.111 0 0 1-4.117 4.117z'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className='header__bottom--tablet'>
            <div className='header__left'>
              <div className='header__search'>
                <div>
                  <div className='header__search-icon'>
                    <svg width='20' height='16' viewBox='0 0 20 16'>
                      <path
                        fill='rgba(234, 53, 45)'
                        d='M18.799 15.25h-11.5a1.25 1.25 0 1 1 0-2.5h11.5a1.25 1.25 0 0 1 0 2.5zm0-6h-11.5a1.25 1.25 0 1 1 0-2.5h11.5a1.25 1.25 0 0 1 0 2.5zm0-6h-11.5a1.25 1.25 0 1 1 0-2.5h11.5a1.25 1.25 0 0 1 0 2.5zM2 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
                      />
                    </svg>
                  </div>
                  <p className='header__search-text'>カテゴリーから探す</p>
                </div>
              </div>
              <div className='header__search'>
                <div>
                  <div className='header__search-icon'>
                    <svg width='23' height='16'>
                      <path
                        fill='rgba(234, 53, 45)'
                        d='M6.315 0L4.473 1.806 2.833.019.73 1.977l1.69 1.84L1.198 5.02c-1.594 1.594-1.594 4.188-.01 5.772L6.3 16h13.272a3.08 3.08 0 0 0 3.077-3.077V3.076A3.08 3.08 0 0 0 19.57 0H6.315zm13.46 12.925a.211.211 0 0 1-.205.205H7.504L3.227 8.771a1.226 1.226 0 0 1-.01-1.71L4.38 5.92l1.28 1.371a2.68 2.68 0 1 0 2.13-1.93L6.433 3.907 7.49 2.87h12.082a.211.211 0 0 1 .206.205v9.848h-.002z'
                      />
                    </svg>
                  </div>
                  <p className='header__search-text'>ブランドから探す</p>
                </div>
              </div>
            </div>
            <div className='header__right'>{displayButtons()}</div>
          </div>
        </div>
      </header>
  )
};
