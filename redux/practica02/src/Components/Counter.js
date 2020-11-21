import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./../redux/actions/counter";
const Counter = (props) => {
  console.log(props);
  return (
    <>
      <h2>Contador: {props.counter}</h2>

      <button type="button" onClick={() => props.increment()}>
        +
      </button>
      <button type="button" onClick={() => props.decrement()}>
        -
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
