import { getHeroeById } from "./../base/heroes";
import heroes from "./../data/heroes";
describe("Pruebas en funciones de heroe", () => {
  // 3. el id es valido y el heroe existe
  // 1. El id es valido
  // 2. El id es valido pero el heroe no existe // undefined
  test("Debe retornar un heroe x ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((heroe) => heroe.id === id);
    expect(heroe).toEqual(heroeData);
    // expect(typeof heroe).toBe("object")
  });
});
