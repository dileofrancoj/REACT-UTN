import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Registro from "./components/Register";
import List from "./components/List";
function App() {
  const [users, setUsers] = useState([]);
  const addUsers = (usuario) => {
    setUsers([...users, usuario]);
  };
  return (
    <div className="container-fluid">
      <Header />
      <div className="row mt-5 justify-content-center">
        <div className="col-4">
          <Registro addUsers={addUsers} />
        </div>
        <div className="col-4">
          <List usuarios={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
