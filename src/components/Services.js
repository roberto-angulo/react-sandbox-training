import React from "react";
import { connect } from "react-redux";
import store from "../store";

const addElementToStoreCallback = ({ elementAdded } = {}) => ({
  type: "ADDING_ELEMENT",
  elementAdded
});

const addElementToStore = event => {
  event.preventDefault();

  const elementAdded = event.target.elements.elementAdded.value;

  store.dispatch(addElementToStoreCallback({ elementAdded }));
};

const Services = props => (
  <div>
    <header>
      <h2>Services</h2>
      <p>
        <strong className="d-block">Services description:</strong>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          consequat urna. Nunc convallis a ante ac bibendum. Aenean cursus
          varius vestibulum. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Donec a eleifend ipsum.
          Nulla facilisi. Aenean dignissim scelerisque mauris a pulvinar.
        </span>
      </p>
      {props.addingElements.element}
    </header>

    <form onSubmit={addElementToStore}>
      <input type="text" className="form-control" id="elementAdded" />
      <button className="btn btn-primary mt-2">Submit</button>
    </form>
  </div>
);

/* store.subscribe(() => console.log(store.getState())); */

const mapStateIntoPropsComponent = state => {
  return {
    addingElements: state.addingElements
  };
};

export default connect(mapStateIntoPropsComponent)(Services);
/* 
export default Services; */
