import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SmallPlanets = (planet, uid) => {
  const { store, actions } = useContext(Context);

  return (
    <Card className="card-view">
      {/* <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
      /> */}
      <Card.Body>
        <Card.Title>{planet.name}</Card.Title>
        <Card.Text>Population: {planet.population}</Card.Text>
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
