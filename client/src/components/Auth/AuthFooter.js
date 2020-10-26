import React from "react";
import { Link } from "react-router-dom";
import LogoGrayIcon from "../../assets/svg/logo-gray.svg";
import styled from "styled-components";
import "./AuthFooter.styles.css";

const AuthFooterWrapper = styled.div`
  padding-bottom: 10px;
  position: absolute;
  right: 0;
  bottom: 1;
  left: 0;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterItems = styled.ul`
  margin: 0;
  padding: 0;
  li {
    display: flex;
    flex-direction: colomn;
    font-size: 12px;
    color: #333;
    line-height: 2em;
    padding: 0;
    list-style: none;
    text-decoration: none;
    @media (min-width: 767px) {
      flex-direction: row;
    }
  }
`;

export const AuthFooter = () => {
  return (
    <AuthFooterWrapper>
      <FooterItems>
        <li>
          <Link to="">プライバシーポリシー</Link>
        </li>
        <li>
          <Link to="">メルカリ利用規約</Link>
        </li>
        <li>
          <Link to="">特定商取引に関する表記</Link>
        </li>
      </FooterItems>
      <div>
        <img className="footer__img" src={LogoGrayIcon} alt="" />
      </div>
      <div className="footer--copyright">&copy; Mercari, Inc.</div>
    </AuthFooterWrapper>
  );
};
