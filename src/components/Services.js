import React from "react";
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
    </header>

    <form onSubmit={addElementToStore}>
      <input type="text" id="elementAdded" />
      <button>Submit</button>
    </form>
  </div>
);

store.subscribe(() => console.log(store.getState()));

export default Services;
