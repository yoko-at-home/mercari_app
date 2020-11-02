import React, { useState } from "react";
import styled from "styled-components";

const LoginInput = styled.div`
  margin: 0 auto;
  input {
    line-height: 35px;
    border-radius: 5px;
    padding: 5px 8px;
    margin-bottom: 20px;
  }
`;

export const LoginForm = () => {
  const [info, setInfo] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  //ここでからの配列を作ってuseState定義するのだったと思うけど..
  const EmailError = "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (info.email === "") {
      EmailError = <div>Error</div>;
      return;
    }
    await fetch("http://localhost:4000/users/login", {
      // credentials: 'include',
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:400",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
  };
  return (
    <>
      <div>{info.error}</div>
      <form method="post" onSubmit={handleSubmit} style={{ width: "100%" }}>
        <LoginInput>
          <input
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            value={info.email}
            className="form__input"
            type="text"
            placeholder="メールアドレス"
          />
        </LoginInput>
        <LoginInput>
          <input
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
            value={info.password}
            className="form__input"
            type="text"
            placeholder="パスワード"
          />
        </LoginInput>
      </form>
    </>
  );
};
