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

// Challenge authentication component
const AuthenticationComponent = props => (
  <div>
    <h1>Authentication component</h1>

    {props.isAuthenticated && <p>{props.dataInfo}</p>}
  </div>
);

const AuthenticationComponentWrapper = InnerComponent => {
  return props => (
    <div>
      <InnerComponent {...props} />
    </div>
  );
};

const AuthenticationApp = AuthenticationComponentWrapper(
  AuthenticationComponent
);

ReactDOM.render(
  <AuthenticationApp isAuthenticated={true} dataInfo={"All data here..."} />,
  document.getElementById("root")
);
