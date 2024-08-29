import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Context } from "../store/appContext";

import SmallPlanets from "./smallPlanets";

const Planets = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="d-flex overflow-auto">
          {store.planets.map((planet, index) => {
            return (
              <SmallPlanets
                uid={planet.uid}
                key={index}
                item={planet}
                type="planets"
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Planets;
