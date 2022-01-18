import style from "./Counter.module.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/counter/counter-actions";

const Counter = ({ step, value, onIncrement, onDecrement }) => {
  return (
    <>
      <h1>Counter</h1>
      <h2 style={{ textAlign: "center" }}>counter of my component</h2>
      <h1>{value}</h1>
      <div className={style.component}>
        <div className={style.blockButton}>
          <button onClick={() => onIncrement(step)}>increment {step}</button>
          <button onClick={() => onDecrement(step)}>decrement {step}</button>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (value) => dispatch(actions.increment(value)),
    onDecrement: (value) => dispatch(actions.decrement(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
