import { useState } from "react";
import PropTypes from "prop-types";
import "./ContactForm.scss";
import { connect } from "react-redux";
import { addContacts } from "../../redux/phoneBook/phoneBook-actions";
const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "number":
        setNumber(value);
        break;
      case "name":
        setName(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ name, number });
    resetState();
  };
  const resetState = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="ContactForm">
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Telephone
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: ({ name, number }) => dispatch(addContacts({ name, number })),
  };
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(ContactForm);
