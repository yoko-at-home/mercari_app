import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./pages/Landing";
import AuthenticationPage from "./pages/Authentication";
import { SignupPage } from "./components/Auth/Signup";
import { Registration } from "./components/Auth/Registration";
import { Login } from './components/Auth/Login'

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route exact path='/login'>
        <AuthenticationPage content={<Login />} />
      </Route>
      <Route exact path='/signup'>
        <AuthenticationPage content={<SignupPage />} />
      </Route>
      <Route path='/signup/registration'>
        <AuthenticationPage content={<Registration />} />
      </Route>
    </BrowserRouter>
  )
};

export default Router;
