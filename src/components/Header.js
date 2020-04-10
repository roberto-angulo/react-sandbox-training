import React from "react";
import { NavLink } from "react-router-dom";
const Header = props => (
  <header>
    <ul className="list-unstyled">
      <li className="d-inline-block mr-2">
        <NavLink to="/" exact={true} activeClassName="font-weight-bold">
          Services
        </NavLink>
      </li>
      <li className="d-inline-block mr-2">
        <NavLink to="/About" activeClassName="font-weight-bold">
          About
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
