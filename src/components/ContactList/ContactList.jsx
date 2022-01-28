import React from "react";
import PropTypes from "prop-types";
import "./ContactList.scss";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phoneBook/phoneBook-actions";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}:<span> {number}</span>
            <button onClick={() => onDeleteContact(id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

const getFilterContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
// const mapStateToProps = (state) => {
//   const { items, filter } = state.contacts;
//   // const normalizedFilter = filter.toLowerCase();
//   // const visibleContacts = items.contacts.filter((contact) =>
//   //   contact.name.toLowerCase().includes(normalizedFilter)
//   // );
//   const visibleContacts = getFilterContacts(items, filter);
//   return {
//     contacts: visibleContacts,
//   };
// };
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilterContacts(items, filter),
});
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(deleteContact(id)),
  };
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
