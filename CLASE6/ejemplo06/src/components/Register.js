import React, { useState } from "react";
import useCustomForm from "./../utils/useCustomForm";
const Register = () => {
  const [values, handler] = useCustomForm(); // [estado del componente, handler del hook]

  const registro = () => {
    console.log("WIIII TE REGISTRATE EN MI APLICACION HERMOSA 🤓");
  };
  return (
    <>
      <form onSubmit={registro}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handler}
          value={values.name || ""}
        />
        <button>Registrase :D</button>
      </form>
    </>
  );
};

export default Register;
