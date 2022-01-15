import style from "./Counter.module.scss";
import { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <>
      <h1>Counter</h1>
      <h2 style={{ textAlign: "center" }}>counter of my component</h2>
      <h1>{value}</h1>
      <div className={style.component}>
        <div className={style.blockButton}>
          <button onClick={onIncrement}>increment</button>
          <button onClick={onDecrement}>decrement</button>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    value: state.counterValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actions.increment(5)),
    onDecrement: () => dispatch(actions.decrement(5)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
