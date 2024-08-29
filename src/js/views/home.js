import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../styles/home.css";
import Characters from "../component/characters";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characters);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="new-amsterdam-regular">Characters</h2>
          <Characters />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="new-amsterdam-regular">Planets</h2>
          <Planets />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="new-amsterdam-regular">Vehicles</h2>
          <Vehicles />
        </Col>
      </Row>
    </Container>
  );
};
