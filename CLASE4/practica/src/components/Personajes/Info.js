import React from "react";

const Info = ({ count, next }) => {
  return (
    <div className="jumbotron">
      <p>Cantidad de personajes : {count}</p>
      <p>Página siguiente : {next}</p>
    </div>
  );
};

export default Info;
