import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Test = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={8} lg={8} xs={12}>
            <h2 className="text-center">React bootstrap</h2>
            <Button variant="danger">Button</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Test;
