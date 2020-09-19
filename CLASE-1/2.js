const peluqueros = [
  {
    id: 1,
    nombre: "Matias",
    sueldo: 30000,
    sexo: "masculino",
  },
  {
    id: 2,
    nombre: "Lucia",
    sueldo: 32000,
    sexo: "femenino",
  },
  {
    id: 3,
    nombre: "Segismundo",
    sueldo: 100000,
    sexo: "masculino",
  },
  {
    id: 5,
    nombre: "Cesar",
    sueldo: 35000,
    sexo: "masculino",
  },
];

const listar = (peluqueros) =>
  peluqueros.forEach((peluquero) => console.log(peluquero));
// const listar = (peluqueros) => peluqueros.forEach(console.log);

const getNombres = (peluqueros = []) =>
  peluqueros.map((peluquero) => peluquero.nombre);

// listar(peluqueros);
const nombresPeluqueros = getNombres(peluqueros);
console.log(nombresPeluqueros);

const filterBySex = (peluqueros, sexo = "femenino") =>
  peluqueros.filter((peluquero) => peluquero.sexo === sexo);

const findById = (peluqueros, id = 1) =>
  peluqueros.find((peluquero) => peluquero.id === id);

const peluqueritos = filterBySex(peluqueros);
const peluUnico = findById(peluqueros, 2);

console.log(peluUnico);
const { nombre: name, sueldo = 10000 } = peluUnico;
console.log(
  `El nombre del peluquero único es : ${name} y sueldo es : ${sueldo}`
);
// 0
// [20000,30000,10000000000, 15000]
const calcularTotal = (peluqueros) =>
  peluqueros.map((peluquero) => peluquero.sueldo).reduce((a, b) => a + b, 0);

const comidas = [
  "Rabas 🍤",
  "Pizza 🍕",
  "Flan con dulce de leche 🍮",
  "Picadita 🧀",
  "Milanga de pollo ....",
  "Mandarina",
];

const [entrada, pp, postre, ...args] = comidas;
console.log(
  `Ezequiel come de entrada ${entrada} de PP : ${pp} y de postre : ${postre}`
);
console.log(`Mauro prefiere : ${args}`);
const elemento = comidas.splice(0, 1);
