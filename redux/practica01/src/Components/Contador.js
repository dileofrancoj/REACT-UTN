import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./../redux/store";
const Contador = (props) => {
  console.log(props);
  return (
    <>
      <h2>Contador de clicks:</h2>
      <h3>Clicks: {props.state}</h3>
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
  return { state };
};
// HOC -> High order component

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contador);
