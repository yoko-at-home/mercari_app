import React from "react";
import { useState } from "react";

export const Registration = () => {
  const [info, setInfo] = useState({
    nickname: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    firstNameKana: "",
    lastNameKana: "",
    year: "",
    month: "",
    day: "",
  });

  let nicknameError = "";

  //　inlineで書くよりもここで宣言した方がいい
  const handleSubmit = async (e) => {
    e.preventDefault(); //リロードさせない
    if (info.nickname === "") {
      nicknameError = <div>Error</div>;
      return;
    }

    await fetch("http://localhost:4000/users/signup", {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json", //server側でjson -> jsに変換
      },
      body: JSON.stringify(info), //serverは、request.bodyで受け取る　StringifyはJSON形式のinfoをjsとして受け取れる
    });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          maxWidth: 700,
          paddingBottom: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              borderBottom: "0.5px solid #F5F5F5",
              padding: "20px 0",
              textAlign: "center",
            }}
          >
            <h5 style={{ fontSize: 20 }}>会員情報入力</h5>
          </div>
          <div
            style={{
              padding: "30px 0",
              width: "100%",
              maxWidth: 700,
              backgroundColor: "white",
              margin: "0 auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 300 }}>
                <form onSubmit={handleSubmit}>
                  <div>
                    <div>
                      <label htmlFor="nickname">ニックネーム</label>
                    </div>
                    <div>
                      <input
                        style={{
                          width: "100%",
                          padding: 10,
                          border: "1px solid #CCCCCC",
                          borderRadius: 3,
                          fontSize: 16,
                        }}
                        onChange={
                          (e) => setInfo({ ...info, nickname: e.target.value }) //スプレッド...中身だけを参照する（参照元に影響が出ない）
                        }
                        value={info.nickname}
                        id="nickname"
                        type="text"
                        placeholder="例）山田太郎"
                      />
                    </div>
                    {nicknameError}
                  </div>
                  <div>
                    <div>
                      <label htmlFor="email">メールアドレス</label>
                    </div>
                    <div>
                      <input
                        onChange={(e) =>
                          setInfo({ ...info, email: e.target.value })
                        }
                        value={info.email}
                        style={{
                          width: "100%",
                          padding: 10,
                          border: "1px solid #CCCCCC",
                          borderRadius: 3,
                          fontSize: 16,
                        }}
                        id="nickname"
                        type="text"
                        placeholder="メールアドレス"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="password">パスワード</label>
                    </div>
                    <div>
                      <input
                        onChange={(e) =>
                          setInfo({ ...info, password: e.target.value })
                        }
                        value={info.password}
                        style={{
                          width: "100%",
                          padding: 10,
                          border: "1px solid #CCCCCC",
                          borderRadius: 3,
                          fontSize: 16,
                        }}
                        id="password"
                        type="text"
                        placeholder="７文字以上の半角英数字"
                      />
                    </div>
                  </div>
                  <div>
                    <p>※ 英字と数字の両方を含めて設定してください</p>
                  </div>
                  <div>
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div>
                      <p>パスワードを表示する</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>本人確認</p>
                    </div>
                    <div>
                      <p>
                        安心・安全にご利用いただくために、お客さまの本人情報の登録にご協力ください。他のお客さまに公開されることはありません。
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>お名前（全角）</p>
                    </div>
                    <div>
                      <div>
                        <input
                          onChange={(e) =>
                            setInfo({ ...info, firstName: e.target.value })
                          }
                          style={{
                            width: "100%",
                            padding: 10,
                            border: "1px solid #CCCCCC",
                            borderRadius: 3,
                            fontSize: 16,
                          }}
                          value={info.firstName}
                          type="text"
                          name="firstName"
                          placeholder="例）山田"
                        />
                      </div>
                      <div>
                        <input
                          onChange={(e) =>
                            setInfo({ ...info, lastName: e.target.value })
                          }
                          style={{
                            width: "100%",
                            padding: 10,
                            border: "1px solid #CCCCCC",
                            borderRadius: 3,
                            fontSize: 16,
                          }}
                          value={info.lastName}
                          type="text"
                          name="lastName"
                          placeholder="例）彩"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>お名前カナ（全角）</p>
                    </div>
                    <div>
                      <input
                        onChange={(e) =>
                          setInfo({ ...info, firstNameKana: e.target.value })
                        }
                        style={{
                          width: "100%",
                          padding: 10,
                          border: "1px solid #CCCCCC",
                          borderRadius: 3,
                          fontSize: 16,
                        }}
                        value={info.firstNameKana}
                        type="text"
                        name="firstNameKana"
                        placeholder="例）ヤマダ"
                      />
                      <input
                        onChange={(e) =>
                          setInfo({ ...info, lastNameKana: e.target.value })
                        }
                        style={{
                          width: "100%",
                          padding: 10,
                          border: "1px solid #CCCCCC",
                          borderRadius: 3,
                          fontSize: 16,
                          writingMode: "none",
                        }}
                        value={info.lastNameKana}
                        type="text"
                        name="lastNameKana"
                        placeholder="例）アヤ"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>生年月日</p>
                    </div>
                    <div>
                      <select
                        defaultValue="invalid"
                        onChange={(e) =>
                          setInfo({ ...info, year: e.target.value })
                        }
                        style={{
                          display: "inline-block",
                          //   width: '100%',
                          padding: 10,
                          border: "1px solid #CCCCCC",
                          borderRadius: 3,
                          fontSize: 16,
                        }}
                      >
                        <option value="invalid">--</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                      </select>
                      <div style={{ display: "inline-block" }}>年</div>
                      <select
                        defaultValue="invalid"
                        onChange={(e) =>
                          setInfo({ ...info, month: e.target.value })
                        }
                        style={{
                          display: "inline-block",
                          padding: 10,
                          border: "1px solid #CCCCCC",
                          borderRadius: 3,
                          fontSize: 16,
                        }}
                      >
                        <option value="invalid">--</option>
                        <option value="12">12</option>
                        <option value="11">11</option>
                        <option value="10">10</option>
                      </select>
                      <div style={{ display: "inline-block" }}>月</div>
                      <select
                        onChange={(e) =>
                          setInfo({ ...info, day: e.target.value })
                        }
                        defaultValue="invalid"
                        style={{
                          display: "inline-block",
                          padding: 10,
                          border: "1px solid #CCCCCC",
                          borderRadius: 3,
                          fontSize: 16,
                        }}
                      >
                        <option value="invalid">--</option>
                        <option value="31">31</option>
                        <option value="30">30</option>
                        <option value="29">29</option>
                      </select>
                      <div style={{ display: "inline-block" }}>日</div>
                    </div>
                  </div>
                  <div>
                    <p>
                      ※
                      本人情報は正しく入力してください。会員登録後、修正するにはお時間を頂く場合があります。
                    </p>
                  </div>
                  <div>
                    <input type="submit" name="submit" />
                  </div>
                  <div>
                    <p>本人情報の登録について</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
