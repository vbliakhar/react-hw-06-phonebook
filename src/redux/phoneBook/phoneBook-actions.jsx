import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  CHANGE_FILTER,
} from "./phoneBook-types";

import shortid from "shortid";

export const addContacts = ({ name, number }) => ({
  type: ADD_CONTACTS,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});
export const deleteContact = (contactId) => ({
  type: DELETE_CONTACTS,
  payload: contactId,
});

export const changeFilter = (value) => {
  return {
    type: CHANGE_FILTER,
    payload: value,
  };
};
