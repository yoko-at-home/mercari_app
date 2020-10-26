import React from "react";
import "../styles/pages.css";

import { AuthHeader } from "../components/Auth/AuthHeader";
import { AuthFooter } from "../components/Auth/AuthFooter";

const AuthenticationPage = ({ content }) => {
  return (
    <div className="auth">
      <AuthHeader />
      {content}
      <AuthFooter />
    </div>
  );
};

export default AuthenticationPage;
