import React from "react";
const Template = ({ name, amount, date }) => (
  <li className="d-inline-block mr-4">
    <span className="d-block font-weight-bold">{name}</span>
    <span className="d-block">{amount}</span>
    <span className="d-block">{date}</span>
  </li>
);
export default Template;
