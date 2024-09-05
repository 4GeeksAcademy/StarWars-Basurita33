import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SmallVehicles = ({name, uid}) => {
  const { store, actions } = useContext(Context);

  return (
    <Card className="card-view">
      <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
      /> 
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ButtonGroup>
          <Link to={`/cardVehicle/${uid}`}>
            <Button variant="secondary">Learn more</Button>
          </Link>
          <Button className="favButton" onClick={() => actions.toggleFavorite(name)} variant="link">
            <i class="fa-solid fa-star"></i>
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
