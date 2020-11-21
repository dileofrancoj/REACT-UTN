import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./Components/Counter";
import Users from "./Components/Users";
function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Users />
    </Provider>
  );
}

export default App;
