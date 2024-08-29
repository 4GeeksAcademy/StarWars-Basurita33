import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Context } from "../store/appContext";

import SmallVehicles from "./smallVehicles";

const Vehicles = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="d-flex overflow-auto">
          {store.vehicles.map((vehicle, index) => {
            return (
              <SmallVehicles
                uid={vehicle.uid}
                key={index}
                item={vehicle}
                type="vehicles"
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Vehicles;