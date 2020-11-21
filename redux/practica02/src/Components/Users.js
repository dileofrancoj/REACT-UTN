import React from "react";
import { connect } from "react-redux";
import { modifyUser } from "./../redux/actions/users";

const Users = ({ nombre, apellido, modify }) => {
  const handlerInput = (e) => {
    modify({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <h3>
        Usuario: {nombre} {apellido}
      </h3>
      <input
        type="text"
        name="nombre"
        placeholder="nombre"
        onChange={handlerInput}
      />
      <input
        type="text"
        name="apellido"
        placeholder="apellido"
        onChange={handlerInput}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    nombre: state.users.nombre,
    apellido: state.users.apellido,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    modify: (payload) => {
      dispatch(modifyUser(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
