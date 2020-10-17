import React, { useState, useEffect } from "react";
import Loading from "./../../common/Loading";
import Personaje from "./../Personaje/Personaje";
import Info from "./Info";
const Personajes = () => {
  // Refs
  const baseUrl = `https://rickandmortyapi.com/api`;
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  const inputSearch = React.createRef();
  // custom Hooks
  useEffect(() => {
    fetch(`${baseUrl}/character/`)
      .then((response) => response.json())
      .then(({ results, info }) => {
        setPersonajes(results);
        setInfo(info);
        setFetching(false);
      })
      .catch((e) => setError(true));
  }, []);

  const handlerButton = () => {
    console.log("Buscar...");
    console.log(inputSearch.current.value);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center text-info">Personajes</h1>

        <input
          ref={inputSearch}
          type="text"
          placeholder="Buscar por nombre..."
          className="form-control  m-auto w-50 mt-5 mb-5"
        />
        <button
          type="button"
          onClick={handlerButton}
          className="btn btn-primary"
        >
          Buscar
        </button>

        {fetching && <Loading />}
        <Info {...info} />
        <div className="row">
          {personajes.map((personaje) => (
            <Personaje {...personaje} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Personajes;
