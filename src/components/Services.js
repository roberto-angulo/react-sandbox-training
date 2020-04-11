import React from "react";
import { connect } from "react-redux";
import store from "../store";
import Template from "./Template";

const addElementToStoreCallback = (element = {}) => ({
  type: "ADDING_ELEMENT",
  element
});

const addElementToStore = event => {
  event.preventDefault();
  const domElements = event.target.elements;

  store.dispatch(
    addElementToStoreCallback({
      name: domElements.elementAddedName.value,
      amount: domElements.elementAddedAmount.value,
      date: domElements.elementAddedDate.value
    })
  );

  domElements.elementAddedName.value = "";
  domElements.elementAddedAmount.value = "";
  domElements.elementAddedDate.value = "";
};

const Services = props => (
  <div>
    <header>
      <h2>Services</h2>
      <p>
        <strong className="d-block">Services description:</strong>
        <span>
          <ol className="pl-0 mt-2">
            {props.addingElements.element.map(currentElement => (
              <Template key={currentElement.name} {...currentElement} />
            ))}
          </ol>
        </span>
      </p>
    </header>

    <form onSubmit={addElementToStore}>
      <div className="form-group">
        <label>
          <input type="text" className="form-control" id="elementAddedName" />
        </label>
      </div>

      <div className="form-group">
        <label>
          <input
            type="number"
            className="form-control"
            id="elementAddedAmount"
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          <input type="date" className="form-control" id="elementAddedDate" />
        </label>
      </div>
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
