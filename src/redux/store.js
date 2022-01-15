import { createStore } from "redux";

const initialState = {
  counterValue: 200,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter / Increment":
      return { counterValue: state.counterValue + action.payload };

    case "counter / Decrement":
      return { counterValue: state.counterValue - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
