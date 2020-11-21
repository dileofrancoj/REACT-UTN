import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Contador from "./Components/Contador";
import { useState } from "react";
function App() {
  const [state, setState] = useState(0);
  const handlerButton = () => {
    setState(state++);
  };
  return (
    <>
      <button type="button" onClick={handlerButton}>
        +
      </button>
      <Provider store={store}>
        <Contador />
      </Provider>
    </>
  );
}

export default App;
