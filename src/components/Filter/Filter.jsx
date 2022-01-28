import PropTypes from "prop-types";
import "./Filter.scss";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/phoneBook/phoneBook-actions";
const Filter = ({ value, onChange }) => {
  return (
    <label className="Filter">
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(changeFilter(event.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
