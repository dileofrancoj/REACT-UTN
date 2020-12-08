export const getCharacters = async () => {
  try {
    // {}
    const result = await fetch("https://breakingbadapi.com/api/characters");
    const data = await result.json();
    return data;
  } catch (e) {
    console.error(e);
    throw new Error("Ocurrió un error en la solicitud");
  }
};

export const getCharacter = async () => {
  try {
    // {}
    const result = await fetch("https://breakingbadapi.com/api/characters");
    const data = await result.json();
    return data;
  } catch (e) {
    console.error(e);
    throw new Error("Ocurrió un error en la solicitud");
  }
};
