import React from "react";
import Logo from "../../assets/img/mercari_logo.png";
import styled from "styled-components";

const AuthHeaderWrapper = styled.div`
  @media (min-width: 359px) {
    display: flex;
    justify-content: center;
    text-align: center;
    height: 55px;
    width: 100%;
    img {
      margin: 11px 0;
      width: 120px;
      height: 33px;
    }
    a:hover {
      color: white;
    }
  }
  @media (min-width: 767px) {
    height: 150px;
    margin: 30px 0;
    width: 700px;
    margin: 0 auto;
    img {
      margin: 40px 0;
      width: 180px;
      height: 50px;
    }
  }
`;

export const AuthHeader = () => {
  return (
    <AuthHeaderWrapper>
      <img className="header__img" src={Logo} alt="メルカリロゴ" />
    </AuthHeaderWrapper>
  );
};
