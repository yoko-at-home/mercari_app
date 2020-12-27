import React, { useState } from "react";
import "../styles/pages.css";
import { Card } from "../components/molecules/Card";
import { useEffect } from "react";
import jwt from "jsonwebtoken";

import { useHistory } from "react-router-dom";

const ItemsPage = () => {
  const history = useHistory();
  const [items, setItems] = useState([]);
  // const items = [undefined, undefined];
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const fetchData = async (userId) => {
      const response = await fetch("http://localhost:4000/api/users/items", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId }),
      });

      const resJson = await response.json();
      /** resJson ->
       * {
       *  status
       *  data: [{商品}, {商品}, {商品}]
       * }
       */
      console.log("resJsonsdfa", resJson);
      setItems(resJson.data);
      // // dataのstateを更新する
      // setData(resJson);
    };

    // idを取得
    // localstorageからtokenをとってくる
    const token = localStorage.getItem("token");
    // 手に入れたtokenを解読する
    try {
      const user = jwt.verify(token, process.env.REACT_APP_JWT_KEY);
      setNickname(user.nickname);

      fetchData(user.id);
    } catch (err) {
      history.push("/");
    }
  }, [history]);

  return (
    <div>
      <div>
        <h3>{nickname}さんが出品した商品</h3>
      </div>
      <div className="items__layout">
        <ul className="items__layout--grid">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <Card
                  type="item"
                  price={item.price}
                  imgurl={item.img_url}
                  description={item.description}
                  likes={item.likes}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemsPage;
