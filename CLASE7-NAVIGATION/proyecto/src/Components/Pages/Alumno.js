import React from "react";
import useGet from "./../../services/useHTTP";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
const Alumno = ({ match }) => {
  console.log(match.params.id);
  const [alumno, isFetching, error] = useGet({
    url: `alumnos/single/${match.params.id}`,
  });
  const { imagen, nombre, apellido, edad, descripcion } = alumno;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image src={imagen} />
          </Col>
          <Col>
            <h3>
              {apellido} {nombre} {edad}
            </h3>
            <p>{descripcion}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Alumno;
