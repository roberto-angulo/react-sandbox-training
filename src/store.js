import { createStore, combineReducers } from "redux";

const AddReducer = (state = { element: "" }, action) => {
  switch (action.type) {
    case "ADDING_ELEMENT":
      return {
        ...state,
        element: action.elementAdded
      };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    addingElements: AddReducer
  })
);

export default store;
