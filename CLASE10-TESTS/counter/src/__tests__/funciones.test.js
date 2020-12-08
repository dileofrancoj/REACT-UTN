import { getUser, getActiveUser } from "./../base/funciones";

describe("Prueba dentro de funciones.js", () => {
  // Hacer un click en el boton 0 -> 1
  test("Se espera que el objeto retorne uid : ab y username francodileo", () => {
    const expectObject = { uid: "ab", username: "francodileo" };
    const object = getUser();
    expect(object).toEqual(expectObject); //toBe("strings",12,true)
  });
  // Hacer click en - (-1) -> 0
  test("Se espera que dado el parametro de entrada franco id:'ab' y username : franco", () => {
    const expectObject = { id: "ab", username: "franco" };
    const nombre = "franco";
    const object = getActiveUser(nombre);
    expect(object).toEqual(expectObject);
  });
});
