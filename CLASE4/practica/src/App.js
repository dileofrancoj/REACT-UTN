import React, { useState, useEffect } from "react";
import Personajes from "./components/Personajes/Personajes";
import Grafico from "./components/Chart";
function App() {
  return (
    <>
      <Grafico />
      <Personajes />
    </>
  );
}

export default App;
