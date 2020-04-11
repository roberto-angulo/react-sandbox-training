import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={Services} />
      <Route path="/About" component={About} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
