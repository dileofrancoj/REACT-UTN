import { returnArray } from "./../base/arr";

describe("Pruebas de destructuración", () => {
  test("debe retornar un string y un numer ", () => {
    const [letras, numeros] = returnArray();
    expect(letras).toBe("ABC");
    expect(typeof numeros).toBe("number");
    // undefined, object, array
  });
});
