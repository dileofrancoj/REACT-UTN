import React from "react";
import useGet from "./../../utils/useHTTP";
import Character from "./Character";
const Characters = () => {
  const [characters, isLoading, error] = useGet({
    url: "https://breakingbadapi.com/api/characters/",
  });
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2>Personajes</h2>
        </div>
        {isLoading ? (
          <h3>Cargando...</h3>
        ) : (
          characters.map((character) => (
            <Character key={character.char_id} {...character} />
          ))
        )}
      </div>
    </>
  );
};

export default Characters;
