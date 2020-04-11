import { createStore, combineReducers } from "redux";

const defaultState = { element: [] };

const AddReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADDING_ELEMENT":
      /*  const name = action.name;
      const amount = action.amount;
      const createdAt = action.createdAt; */

      return {
        ...state,
        element: [...state.element, action.element]
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

/* const store = createStore(
  combineReducers({
    addingElements: AddReducer
  })
);

 */
