import { getSaludo } from "./../base/template-strings";

describe("Pruebas en template-strings getSaludo()", () => {
  test("debe retornar hola franco si la funcion recibe como parametro franco", () => {
    // el parametro que recibe la función es "franco"
    const nombre = "franco";
    const result = getSaludo(nombre);
    expect(result).toBe("hola franco"); //espero que [prueba] retorne []
  });

  test("debe retornar hola frantuko si la función no recibe parametros", () => {
    const result = getSaludo();
    // result === "hola frantuko"
    expect(result).toBe("hola frantuko");
  });
});
