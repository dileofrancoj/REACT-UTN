import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./Todo/Todo";
import Posts from "./Posts";
function App() {
  return (
    // router
    <Provider store={store}>
      <Todo />
      <Posts />
    </Provider>
  );
}

export default App;
