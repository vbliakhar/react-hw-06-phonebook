import React from "react";
import PropTypes from "prop-types";
import "./ContactList.scss";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phoneBook/phoneBook-actions";
const ContactList = ({ value, contacts, onDeleteContact }) => {
  return (
    <>
      {" "}
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
      <ul className="ContactList">
        {value.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}:<span> {number}</span>
              <button onClick={() => onDeleteContact(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.contacts.items.contacts,
  };
};
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
