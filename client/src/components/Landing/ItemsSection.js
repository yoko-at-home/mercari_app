import React from "react";
import { useState, useEffect } from "react";
import "./ItemsSection.styles.css";
import { Heart } from "../../assets/svg";

export const ItemsSection = () => {
  const [items, setItems] = useState([]); //Hooksの書き方
  useEffect(() => {
    async function fetchData() {
      try {
        //apiから情報を取得（からの配列を最初に取得なのでawait、結果がきたら情報が入る
        const res = await fetch("http://localhost:4000/items");
        console.log('res', res);

        //json形式をjavascriptに変換
        const resJson = await res.json();
        console.log('log', resJson);
        // 九つだけ表示させる
        const displayingItems = resJson.data.slice(0, 10);

        setItems(displayingItems);
      } catch (err) {
        throw err;
      }
    }
    fetchData();
  }, []); //第二の引数 useEffect　ページがレンダリングされる前に一度だけ呼ばれる(値を入れると無限ループ)

  const genres = [
    {
      url: "#ladies",
      name: "レディース",
    },
    {
      url: "#mens",
      name: "メンズ",
    },
    {
      url: "#electronics",
      name: "家電・スマホ・カメラ",
    },
    {
      url: "#toys",
      name: "おもちゃ・ホビー・グッズ",
    },
  ];

  const displayItems = items.map((item, index) => {
    if (index === 9) {
      return (
        <li key={item.id}>
          <a href="http://www.google.com">
            <div className="card card-none">
              <div className="card__preview">
                <div className="card__preview--price">
                  <div className="card__preview--text">
                    <p>¥6666</p>
                  </div>
                </div>
                <img src={item.imgUrl} alt="" />
              </div>

              <div className="card__caption">
                <div className="card__caption-description">
                  <span>{item.title}</span>
                  <div className="card__caption-likes">
                    <div className="card__like-icon">
                      <Heart />
                    </div>
                    <div className="card__like-text">
                      <span id="count">20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      );
    } else {
      return (
        <li key={item.id}>
          <a href="http://www.google.com">
            <div className="card">
              <div className="card__preview">
                <div className="card__preview--price">
                  <div className="card__preview--text">
                    <p>¥{item.price}</p>
                  </div>
                </div>
                <img src={item.imgUrl} alt="" />
              </div>

              <div className="card__caption">
                <div className="card__caption-description">
                  <span>{item.title}</span>
                  <div className="card__caption-likes">
                    <div className="card__like-icon">
                      <Heart />
                    </div>
                    <div className="card__like-text">
                      <span id="count">{item.like}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      );
    }
  });

  // console.log("items state", items); //StateにAPIの情報が入る

  return (
    <section className="items-section">
      <div className="items-section__top">
        <div className="items-section__title">
          <h3>人気のカテゴリー</h3>
        </div>
        <ul className="items-section__categories">
          {genres.map((genre, index) => {
            return (
              <li key={index}>
                <a href={genre.url}>{genre.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="ladies" className="items-section__bottom">
        <div className="items-section__bottom-inner">
          <div className="items-section__product--title">
            <div className="items-section__category--text">
              <h4>レディース新着アイテム</h4>
            </div>
            <div className="items-section__category--more">
              <a href="/">もっと見る</a>
              <svg
                width="16"
                height="16"
                fill="#0095ee"
                fill-rule="evenodd"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="items-section__category--svg"
              >
                <path d="M9,19a.7.7,0,0,1-.49-.2.69.69,0,0,1,0-1l5.62-5.63a.28.28,0,0,0,.09-.21.27.27,0,0,0-.09-.2L8.6,6.19a.7.7,0,1,1,1-1l5.58,5.58A1.71,1.71,0,0,1,15.66,12a1.73,1.73,0,0,1-.49,1.2L9.54,18.8A.74.74,0,0,1,9,19Z"></path>
              </svg>
            </div>
          </div>
          <div className="items-section__product--container">
            <ul>{displayItems}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};
