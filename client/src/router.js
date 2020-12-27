import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ItemsPage from "./pages/Items";
import LandingPage from "./pages/Landing";
import SellPage from "./pages/Sell";
import { Layout } from "./components/layout";
import { Auth } from "./components/organisms/Auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login'>
          <Layout type='auth' content={<Auth type='login' />} />
        </Route>
        <Route exact path='/signup'>
          <Layout type='auth' content={<Auth type='signup' />} />
        </Route>
        <Route path='/signup/registration'>
          <Layout type='auth' content={<Auth type='registration' />} />
        </Route>
        <Route exact path='/users/items'>
                  <ItemsPage />
         <Layout type='auth' content={<Auth type='items' />} />
        </Route>
        <Route exact path='/items/sell'>
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
