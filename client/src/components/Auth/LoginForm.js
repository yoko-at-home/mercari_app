import React from "react";
// import styled from "styled-components";

// const LoginFormInner = styled.div`
//    {
//     padding: 24px 32px;
//     border-top: 1px solid #eee;
//   }
// `;

export const LoginForm = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%" }}>
        <input
          style={{
            display: "block",
            width: "100%",
            height: "42px",
            border: "1px solid #CCCCCC",
            borderRadius: 3,
            padding: "20px 8px",
            fontSize: 16,
          }}
          type="email"
          placeholder="メールアドレス"
        />
        <div style={{ margin: "10px 0" }}>
          <input
            style={{
              display: "block",
              width: "100%",
              height: "42px",
              border: "1px solid #CCCCCC",
              borderRadius: 3,
              padding: 8,
              fontSize: 16,
            }}
            type="password"
            placeholder="パスワード"
          />
        </div>
      </div>
    </div>
  );
};
