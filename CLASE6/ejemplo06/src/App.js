import React from "react";
import Characters from "./components/Characters/";
import Register from "./components/Register";
import Test from "./components/Test";
function App() {
  return (
    <div className="container">
      <Test />
      <Register />
      <Characters />
    </div>
  );
}

export default App;
