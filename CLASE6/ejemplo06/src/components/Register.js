import React, { useState } from "react";
import useCustomForm from "./../utils/useCustomForm";
// npm install @hookform/resolvers yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  name: yup
    .string()
    .required("El campo es obligatorio")
    .min(5, "El minimo es 5 caracteres")
    .max(20, "El máximo es de 20 caracteres"),
  nickname: yup.string().required(),
  email: yup.string().email().required(),
});
const Register = () => {
  // const reg = new Regexp(\w{5,}\)
  // reg.validate()
  // const patente = \[A-Za-z{2}\s[0-9]{3}\s[A-Za-z]{2}]

  const [values, handler, setValues] = useCustomForm(); // [estado del componente, handler del hook]

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const registro = (e) => {
    console.log("WIIII TE REGISTRATE EN MI APLICACION HERMOSA 🤓");
    setValues({});
  };
  return (
    <>
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-6">
          <form onSubmit={handleSubmit(registro)}>
            <div className="form-group">
              <input
                ref={register}
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
                onChange={handler}
                value={values.name || ""}
              />
              <label className="text-danger">{errors.name?.message}</label>
            </div>
            <div className="form-group">
              <input
                ref={register}
                type="text"
                className="form-control"
                placeholder="Nickname"
                name="nickname"
                onChange={handler}
                value={values.nickname || ""}
              />
              <div className="form-group">
                <input
                  ref={register}
                  type="text"
                  className="form-control"
                  placeholder="foo@example.com"
                  name="email"
                  onChange={handler}
                  value={values.email || ""}
                />
              </div>
            </div>
            <button name="registrar" className="btn btn-primary btn-block">
              Registrase :D
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
