import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SmallPlanets = ({name, uid}) => {
  const { store, actions } = useContext(Context);

  return (
    <Card className="card-view">
      <Card.Img
        variant="top"
        src={ uid == 1 ? "https://i.pinimg.com/originals/c0/6c/9d/c06c9d63bda3f0a823aee1b2f47b0457.png" : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
      /> 
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <ButtonGroup>
          <Link to={`/cardPlanet/${uid}`}>
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
