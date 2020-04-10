import React from "react";
import store from "../store";
import { connect } from "react-redux";
/* import TemplateComponent from "../components/TemplateComponent"; */
const About = props => (
  <header>
    <h2>About</h2>
    <p>
      <strong className="d-block">About description:</strong>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
        consequat urna. Nunc convallis a ante ac bibendum. Aenean cursus varius
        vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Donec a eleifend ipsum. Nulla facilisi.
        Aenean dignissim scelerisque mauris a pulvinar.
      </span>
    </p>
    {props.elementAdded && <p>{props.elementAdded}</p>}
  </header>
);
store.subscribe(() => console.log(store.getState()));

const mapStateIntoPropsComponent = state => ({
  elementAdded: state.elementAdded
});

export default connect(mapStateIntoPropsComponent)(About);
