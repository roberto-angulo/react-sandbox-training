import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Services} />
      <Route path="/About" component={About} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
