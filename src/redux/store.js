// import { combineReducers } from "redux";
import logger from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import counterReducer from "./counter/counter-reducer";
import contactsReducer from "./phoneBook/phoneBook-reducer";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   contacts: contactsReducer,
// });
// console.log(process.env.NODE_ENV);
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsReducer,
  },

  devTools: process.env.NODE_ENV === "development",
  middleware,
  //Or you can write a Boolean value (true or false)
});
//createStore(rootReducer, composeWithDevTools());

export default store;
