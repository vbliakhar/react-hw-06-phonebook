import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";
import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  CHANGE_FILTER,
} from "./phoneBook-types";

export const addContacts = createAction(ADD_CONTACTS, ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name: name,
      number: number,
    },
  };
});
export const deleteContact = createAction(DELETE_CONTACTS);
export const changeFilter = createAction(CHANGE_FILTER);
// export const addContacts = ({ name, number }) => ({
//   type: ADD_CONTACTS,
//   payload: {
//     id: shortid.generate(),
//     name: name,
//     number: number,
//   },
// });

// export const deleteContact = (contactId) => ({
//   type: DELETE_CONTACTS,
//   payload: contactId,
// });

// export const changeFilter = (value) => {
//   return {
//     type: CHANGE_FILTER,
//     payload: value,
//   };
// };
