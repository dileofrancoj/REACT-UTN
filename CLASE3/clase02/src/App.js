import React, { useState } from "react";
import Header from "./components/Header/Header";
import Registro from "./components/Register";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row mt-5 justify-content-center">
        <div className="col-4">
          <Registro />
        </div>
        <div className="col-4">
          <h2>Todo el listado de usuarios Listado /</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
