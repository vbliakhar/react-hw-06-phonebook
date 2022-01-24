import { combineReducers } from "redux";
import { ADD_CONTACTS, DELETE_CONTACTS } from "./phoneBook-types";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};
const items = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [payload, ...state.contacts],
      };
    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    default:
      return state;
  }
};
const filter = (state = "", action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
