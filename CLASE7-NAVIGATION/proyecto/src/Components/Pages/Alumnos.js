import React from "react";
import { Link } from "react-router-dom";
import useGet from "./../../services/useHTTP";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
const Alumnos = () => {
  const [alumnos, isFetching, error] = useGet({ url: "alumnos/all" });

  return (
    <>
      <Container>
        <Row>
          {alumnos.map(({ id, nombre, apellido, descripcion, imagen }) => (
            <Col md="4" lg="4" xs="12" key={id}>
              <Card>
                <Card.Img variant="top" src={imagen}></Card.Img>
                <Card.Body>
                  <Card.Title>
                    {nombre} {apellido}
                  </Card.Title>
                  <Card.Text>{descripcion}</Card.Text>
                  <Button variant="primary" block>
                    <Link to={`/alumnos/${id}`}>Ver más</Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Alumnos;
