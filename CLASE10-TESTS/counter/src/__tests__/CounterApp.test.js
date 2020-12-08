import React from "react";
import { shallow } from "enzyme"; // acceder al dom de un componente
import CounterApp from "./../CounterApp";
describe("Pruebas de CounterApp con valor 10 por default", () => {
  // pruebas unitarias
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  // El valor por default
  test("Debe cargar el CounterApp", () => {
    // observer -> publish suscriber -> snapshot
    expect(wrapper).toMatchSnapshot(); // true -> false
  });

  // getElementByClassName, TAG, id
  test("Debe mostrar el valor de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const text = wrapper.find("h2").text().trim();
    expect(text).toBe("100");
  });

  test("Debe incrementar en 1", () => {
    const expectedOutput = "11";
    // queryselect // getElementByTagName
    wrapper.find("button").at(0).simulate("click");
    const text = wrapper.find("h2").text().trim();
    expect(text).toBe(expectedOutput);
  });
  test("Debe decrementar en 1", () => {
    const expectedOutput = "9";
    // queryselect // getElementByTagName
    wrapper.find("button").at(2).simulate("click");
    const text = wrapper.find("h2").text().trim();
    expect(text).toBe(expectedOutput);
  });

  test("Debe volver a 10", () => {
    wrapper.find("button").at(1).simulate("click");
    const text = wrapper.find("h2").text().trim();
    expect(text).toBe("10");
  });
  // React-testing-library (XSS + SQLi) '
});
