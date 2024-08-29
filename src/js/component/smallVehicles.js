import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SmallVehicles = (vehicle, uid) => {
  const { store, actions } = useContext(Context);

  return (
    <Card className="card-view">
      {/* <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/vehicle/${uid}.jpg`}
      /> */}
      <Card.Body>
        <Card.Title>{vehicle.name}</Card.Title>
        <Card.Text>Model: {vehicle.model}</Card.Text>
        <Card.Text>Class: {vehicle.vehicle_class}</Card.Text>
        <ButtonGroup>
          <Link to={`/cardVehicle/${uid}`}>
            <Button variant="secondary">Learn more</Button>
          </Link>
          <Button onClick={() => actions.toggleFavorite} variant="warning">
            Fav
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
