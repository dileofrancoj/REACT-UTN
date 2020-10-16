import React, { useState, useEffect } from "react";
import Loading from "./../../common/Loading";
const Personajes = () => {
  const baseUrl = `https://rickandmortyapi.com/api`;
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

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
  // Inicialmente hago un fetch

  const handlerButton = () => {
    console.log("click aca");
  };
  return (
    <>
      {fetching && <Loading />}
      {personajes.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
      <button type="button" onClick={handlerButton}>
        Boton
      </button>
    </>
  );
};

export default Personajes;
