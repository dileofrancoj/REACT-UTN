// Simple react snippets
// imr
import React from "react";
// sfc

const list = (hobbies) => {
  return (
    <ul>
      {hobbies.map((hobbie, index) => (
        <li key={hobbie + index}>{hobbie}</li>
      ))}
    </ul>
  );
};
const Alumno = ({ nombre, apellido, edad, mascota, hobbies }) => {
  return (
    <div>
      <h2>Nombre : {nombre}</h2>
      <h2>Apellido : {apellido}</h2>
      <h2>Edad : {edad}</h2>
      <h3>Mascota : {mascota}</h3>
      Hobbies : {hobbies ? list(hobbies) : "-"}
      <hr />
    </div>
  );
};

export default Alumno;
