import React from "react";
const List = ({ usuarios }) => {
  return (
    <>
      {!usuarios.length ? "No hay usuarios cargados" : null}
      {usuarios.map(
        ({ nombre, apellido, mail, id, test = "undefined definido :D" }) => (
          <div className="card" key={id}>
            {test}
            <div className="card-body">
              <h4 className="card-title">
                {id}. {nombre} {apellido}
              </h4>
              <p>{mail}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default List;
