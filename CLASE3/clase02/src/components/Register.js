import React, { useState } from "react";
import Error from "./Error";
const shortId = require("short-id");

const Registro = ({ addUsers }) => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    mail: "",
  });

  const handlerInput = (e) => {
    const { value: input } = e.target;
    setUser({
      ...user,
      [e.target.id]: input,
    });
  };
  const register = (e) => {
    e.preventDefault(); // Evita el comportamiento x defecto de enviar la info al server :D

    if (
      user.nombre.trim() === "" ||
      user.apellido.trim() === "" ||
      user.mail.trim() === ""
    ) {
      setError(true);
      return;
    }
    // propagar el estado al app
    const { nombre, apellido, mail } = user;
    const userObject = {
      id: shortId.generate(),
      nombre,
      apellido,
      mail,
    };

    addUsers(userObject);
    setUser({
      nombre: "",
      apellido: "",
      mail: "",
    });
  };
  return (
    <>
      <form onSubmit={register} className="mb-3">
        <div className="form-group">
          <label htmlFor="nombre" /> Nombre
          <span className="text-danger">*</span>
          <input
            id="nombre"
            type="text"
            className="form-control"
            placeholder="Nombre"
            onChange={handlerInput}
            value={user.nombre}
            required
            name="nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido" /> Apellido
          <span className="text-danger">*</span>
          <input
            id="apellido"
            type="text"
            className="form-control"
            placeholder="Apellido"
            onChange={handlerInput}
            value={user.apellido}
            name="apellido"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mail" /> Mail<span className="text-danger">*</span>
          <input
            id="mail"
            type="email"
            className="form-control"
            placeholder="foo@example.com"
            onChange={handlerInput}
            value={user.mail}
            name="mail"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Registro 🏅
        </button>
      </form>
      {error ? <Error message="Todos los campos son obligatorios" /> : null}
    </>
  );
};

export default Registro;
