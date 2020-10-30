import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
/*
    const nav = [
        {
            path : '/alumnos',
            title : 'Alumnos'
        }
    ]
*/
const Navbar = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <NavLink
            to="/"
            exact
            activeStyle={{ color: "tomato" }}
            className="mr-1"
          >
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/alumnos"
            exact
            activeStyle={{ color: "tomato" }}
            className="mr-1"
          >
            Alumnos
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/alumnos/nuevo"
            activeStyle={{ color: "tomato" }}
            className="mr-1"
          >
            Alta de alumno
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default Navbar;
