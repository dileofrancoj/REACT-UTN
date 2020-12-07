const nombre = "Franco";
const apellido = "Di Leo";

const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = "frantuko") {
  return `Hola ${nombre}`;
}
