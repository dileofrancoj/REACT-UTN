import React from "react";
// JSX
import Alumno from "./components/Alumno";
import Nav from "./components/layout/Nav";
const App = () => {
  return (
    <div>
      <Nav />
      <Alumno
        nombre="franco"
        apellido="di leo"
        mascota="Amazonas"
        edad={26}
        hobbies={["Cross", "Nerdear", "Criptosumas"]}
      />
      <Alumno
        nombre="Matias"
        apellido="Ponti"
        mascota="Poli/y"
        edad={28}
        hobbies={["Guitarra", "coDING 🤓"]}
      />
    </div>
  );
};

export default App;
