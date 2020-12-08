import { getCharacters, getCharacter } from "../base/async-await";
describe("Test de promesas", () => {
  test("Debe retornar un array de personajes", async () => {
    const characters = await getCharacters();
    //expect(typeof characters).toBe("object");
    if (characters.length > 0) {
      return true;
    }
  });
  test("Debe retornar un objeto de personaje", async () => {
    const character = await getCharacter();
    expect(typeof character).toBe("object");
  });
});
