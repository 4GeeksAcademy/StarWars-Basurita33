import React, { useEffect, useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Card, Button, ButtonGroup } from "react-bootstrap";

export const CardVehicle = (vehicle) => {
  const { uid } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDetails(uid, "vehicles");
  }, []);

  
  return (
    <Card className="big-card">
      <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
      />
      <Card.Body>
        <Card.Title>{store.details?.name}</Card.Title>
        <Card.Text>
        <Card.Text>Cargo Capacity: {store.details?.cargo_capacity}</Card.Text>
        <Card.Text>Crew: {store.details?.crew}</Card.Text>
        <Card.Text>Manufacturer: {store.details?.manufacturer}</Card.Text>
        <Card.Text>Model: {store.details?.model}</Card.Text>
        </Card.Text>
        <ButtonGroup>
          <Button className="favButton" onClick={() => actions.toggleFavorite(store.details?.name)} variant="link">
            <i class="fa-solid fa-star"></i>
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
