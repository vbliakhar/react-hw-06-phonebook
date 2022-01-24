import { ADD_CONTACTS, DELETE_CONTACTS } from "./phoneBook-types";
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
