import ReactDOM from "react-dom";
import "./style.css";
import React from "react";

const Element = props => (
  <div>
    <h1>Titlte just here</h1>
    <p>{props.description}</p>
  </div>
);

const MainElement = WrappedComponent => {
  return props => (
    <main>
      <WrappedComponent {...props} />
    </main>
  );
};

const MainElementComponent = MainElement(Element);

ReactDOM.render(
  <MainElementComponent description={"it that fine?"} />,
  document.getElementById("root")
);
