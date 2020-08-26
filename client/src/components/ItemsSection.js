import React from "react";
import mercari_item9 from "../assets/img/mercari_item9.jpg";
import "./ItemsSection.css";

const ItemsSection = () => {
  return (
    <section class="items-section">
      <div class="items-section__inner--top">
        <div class="items-section__title">
          <h3>人気のカテゴリー</h3>
        </div>
        <ul class="items-section__categories horizontal_scroll">
          <li class="items-section__categories-item">
            <button>レディース</button>
          </li>
          <li class="items-section__categories-item">
            <button>メンズ</button>
          </li>
          <li class="items-section__categories-item">
            <button>家電・スマホ・カメラ</button>
          </li>
          <li class="items-section__categories-item">
            <button>おもちゃ・ホビー・グッズ</button>
          </li>
        </ul>
      </div>
      <div class="items-section__inner--bottom">
        <div class="items-section__inner--bottom-container">
          <div class="items-section__product--title">
            <div class="items-section__category--text">
              <h4>レディース新着アイテム</h4>
            </div>
            <div classs="items-section__link-wrapper">
              <div class="items-section__category--more">
                <a href="/">もっと見る</a>
                <svg
                  width="16"
                  height="16"
                  fill="#0095ee"
                  fill-rule="evenodd"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="items-section__category--svg"
                >
                  <path d="M9,19a.7.7,0,0,1-.49-.2.69.69,0,0,1,0-1l5.62-5.63a.28.28,0,0,0,.09-.21.27.27,0,0,0-.09-.2L8.6,6.19a.7.7,0,1,1,1-1l5.58,5.58A1.71,1.71,0,0,1,15.66,12a1.73,1.73,0,0,1-.49,1.2L9.54,18.8A.74.74,0,0,1,9,19Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="items-section__product--container">
            <a href="#">
              <div class="card">
                <div class="card__preview">
                  <div class="card__preview--price">
                    <div class="card__preview--text">
                      <p>¥6666</p>
                    </div>
                  </div>
                  <img src={mercari_item9} alt="" />
                </div>

                <div class="card__caption">
                  <div class="card__caption-description">
                    <span>スペイン購入 MANGO エスニック柄ワンピース</span>
                    <div class="card__caption-likes">
                      <div>
                        <label class="like">
                          <input type="checkbox" />
                          <i class="material-icons" id="heart">
                            favorite
                          </i>
                          <div class="ripple"></div>
                        </label>
                      </div>
                      <div class="favourite-counter">
                        <span id="count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="card">
                <div class="card__preview">
                  <div class="card__preview--price">
                    <div class="card__preview--text">
                      <p>¥6666</p>
                    </div>
                  </div>
                  <img src={mercari_item9} alt="" />
                </div>

                <div class="card__caption">
                  <div class="card__caption-description">
                    <span>スペイン購入 MANGO エスニック柄ワンピース</span>
                    <div class="card__caption-likes">
                      <div>
                        <label class="like">
                          <input type="checkbox" />
                          <i class="material-icons" id="heart">
                            favorite
                          </i>
                          <div class="ripple"></div>
                        </label>
                      </div>
                      <div class="favourite-counter">
                        <span id="count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="card">
                <div class="card__preview">
                  <div class="card__preview--price">
                    <div class="card__preview--text">
                      <p>¥6666</p>
                    </div>
                  </div>
                  <img src={mercari_item9} alt="" />
                </div>

                <div class="card__caption">
                  <div class="card__caption-description">
                    <span>スペイン購入 MANGO エスニック柄ワンピース</span>
                    <div class="card__caption-likes">
                      <div>
                        <label class="like">
                          <input type="checkbox" />
                          <i class="material-icons" id="heart">
                            favorite
                          </i>
                          <div class="ripple"></div>
                        </label>
                      </div>
                      <div class="favourite-counter">
                        <span id="count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="card">
                <div class="card__preview">
                  <div class="card__preview--price">
                    <div class="card__preview--text">
                      <p>¥6666</p>
                    </div>
                  </div>
                  <img src={mercari_item9} alt="" />
                </div>

                <div class="card__caption">
                  <div class="card__caption-description">
                    <span>スペイン購入 MANGO エスニック柄ワンピース</span>
                    <div class="card__caption-likes">
                      <div>
                        <label class="like">
                          <input type="checkbox" />
                          <i class="material-icons" id="heart">
                            favorite
                          </i>
                          <div class="ripple"></div>
                        </label>
                      </div>
                      <div class="favourite-counter">
                        <span id="count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="card">
                <div class="card__preview">
                  <div class="card__preview--price">
                    <div class="card__preview--text">
                      <p>¥6666</p>
                    </div>
                  </div>
                  <img src={mercari_item9} alt="" />
                </div>

                <div class="card__caption">
                  <div class="card__caption-description">
                    <span>スペイン購入 MANGO エスニック柄ワンピース</span>
                    <div class="card__caption-likes">
                      <div>
                        <label class="like">
                          <input type="checkbox" />
                          <i class="material-icons" id="heart">
                            favorite
                          </i>
                          <div class="ripple"></div>
                        </label>
                      </div>
                      <div class="favourite-counter">
                        <span id="count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="card">
                <div class="card__preview">
                  <div class="card__preview--price">
                    <div class="card__preview--text">
                      <p>¥6666</p>
                    </div>
                  </div>
                  <img src={mercari_item9} alt="" />
                </div>

                <div class="card__caption">
                  <div class="card__caption-description">
                    <span>スペイン購入 MANGO エスニック柄ワンピース</span>
                    <div class="card__caption-likes">
                      <div>
                        <label class="like">
                          <input type="checkbox" />
                          <i class="material-icons" id="heart">
                            favorite
                          </i>
                          <div class="ripple"></div>
                        </label>
                      </div>
                      <div class="favourite-counter">
                        <span id="count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="card">
                <div class="card__preview">
                  <div class="card__preview--price">
                    <div class="card__preview--text">
                      <p>¥6666</p>
                    </div>
                  </div>
                  <img src={mercari_item9} alt="" />
                </div>

                <div class="card__caption">
                  <div class="card__caption-description">
                    <span>スペイン購入 MANGO エスニック柄ワンピース</span>
                    <div class="card__caption-likes">
                      <div>
                        <label class="like">
                          <input type="checkbox" />
                          <i class="material-icons" id="heart">
                            favorite
                          </i>
                          <div class="ripple"></div>
                        </label>
                      </div>
                      <div class="favourite-counter">
                        <span id="count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="card">
                <div class="card__preview">
                  <div class="card__preview--price">
                    <div class="card__preview--text">
                      <p>¥6666</p>
                    </div>
                  </div>
                  <img src={mercari_item9} alt="" />
                </div>

                <div class="card__caption">
                  <div class="card__caption-description">
                    <span>スペイン購入 MANGO エスニック柄ワンピース</span>
                    <div class="card__caption-likes">
                      <div>
                        <label class="like">
                          <input type="checkbox" />
                          <i class="material-icons" id="heart">
                            favorite
                          </i>
                          <div class="ripple"></div>
                        </label>
                      </div>
                      <div class="favourite-counter">
                        <span id="count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="card">
                <div class="card__preview">
                  <div class="card__preview--price">
                    <div class="card__preview--text">
                      <p>¥6666</p>
                    </div>
                  </div>
                  <img src={mercari_item9} alt="" />
                </div>

                <div class="card__caption">
                  <div class="card__caption-description">
                    <span>スペイン購入 MANGO エスニック柄ワンピース</span>
                    <div class="card__caption-likes">
                      <div>
                        <label class="like">
                          <input type="checkbox" />
                          <i class="material-icons" id="heart">
                            favorite
                          </i>
                          <div class="ripple"></div>
                        </label>
                      </div>
                      <div class="favourite-counter">
                        <span id="count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="card card-none">
                <div class="card__preview">
                  <div class="card__preview--price">
                    <div class="card__preview--text">
                      <p>¥6666</p>
                    </div>
                  </div>
                  <img src={mercari_item9} alt="" />
                </div>

                <div class="card__caption">
                  <div class="card__caption-description">
                    <span>スペイン購入 MANGO エスニック柄ワンピース</span>
                    <div class="card__caption-likes">
                      <div>
                        <label class="like">
                          <input type="checkbox" />
                          <i class="material-icons" id="heart">
                            favorite
                          </i>
                          <div class="ripple"></div>
                        </label>
                      </div>
                      <div class="favourite-counter">
                        <span id="count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
