import React from "react";
const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="form-control" placeholder="nueva tarea" />
      <button>Agregar tarea</button>
    </form>
  );
};

export default Form;
