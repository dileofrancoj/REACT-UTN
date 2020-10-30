import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./../src/Components/layout/Navbar";
import Alumnos from "./../src/Components/Pages/Alumnos";
import Alumno from "./../src/Components/Pages/Alumno";
const Home = () => {
  return <h1>Home component</h1>;
};

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/alumnos" exact component={Alumnos} />
        <Route path="/alumnos/:id" component={Alumno} />
      </Router>
    </>
  );
}

export default App;
