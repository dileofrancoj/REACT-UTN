import React from "react";
const moment = require("moment");

const Personaje = ({ id, name, image, status, gender, created, species }) => {
  return (
    <div className="col-4 mb-2" key={id}>
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {status === "Alive" ? "Vivo" : "Muerto"} - {gender} - {species}
          </p>
          <p>Fecha de nacimiento : {moment(created).format("YYYY-MM-DD")}</p>
          <a href="#" className="btn btn-primary btn-block">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
