import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  CHANGE_FILTER,
} from "./phoneBook-types";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    { id: "id-5", name: "Vova", number: "456-654-898" },
  ],
};
const items = createReducer(initialState, {
  [ADD_CONTACTS]: (state, { payload }) => {
    return {
      ...state,
      contacts: [payload, ...state.contacts],
    };
  },
  [DELETE_CONTACTS]: (state, { payload }) => ({
    ...state,
    contacts: state.contacts.filter((contact) => contact.id !== payload),
  }),
});
// const items = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACTS:
//       return {
//         ...state,
//         contacts: [payload, ...state.contacts],
//       };
//     case DELETE_CONTACTS:
//       return {
//         ...state,
//         contacts: state.contacts.filter((contact) => contact.id !== payload),
//       };

//     default:
//       return state;
//   }
// };
// const filter = createReducer("", {
//   [CHANGE_FILTER]: (state, { payload }) => ({
//     payload,
//   }),
// });
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
