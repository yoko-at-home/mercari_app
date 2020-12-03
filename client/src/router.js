import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/Landing";
import AuthenticationPage from "./pages/Authentication";
import ItemsPage from './pages/items';
import SellPage from './pages/sell'
import { Signup } from "./components/Auth/Signup";
import { Registration } from "./components/Auth/Registration";
import { Login } from './components/Auth/Login'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/login'>
            <AuthenticationPage content={<Login />} />
          </Route>
          <Route exact path='/signup'>
            <AuthenticationPage content={<Signup />} />
          </Route>
          <Route path='/signup/registration'>
            <AuthenticationPage content={<Registration />} />
          </Route>
          <Route path='/users/items'>
            <ItemsPage />
          </Route>
          <Route path='/items/sell'>
            <SellPage />
          </Route>
          <Route path='/'>
            <LandingPage />
          </Route>
          <Route>ご指定のページがありません</Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;
