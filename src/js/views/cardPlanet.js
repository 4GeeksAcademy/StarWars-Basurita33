import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Card, Button, ButtonGroup } from "react-bootstrap";

export const CardPlanet = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDetails(uid, "planets");
  }, []);

  return (
    <Card className="big-card">
      <Card.Img
        variant="top"
        src={uid == 1 ? "https://i.pinimg.com/originals/c0/6c/9d/c06c9d63bda3f0a823aee1b2f47b0457.png" : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
      />
      <Card.Body>
        <Card.Title>{store.details?.name}</Card.Title>
        <Card.Text>Climate: {store.details?.climate}</Card.Text>
        <Card.Text>Terrain: {store.details?.terrain}</Card.Text>
        <Card.Text>Orbital Period: {store.details?.orbital_period}</Card.Text>
        <Card.Text>Population: {store.details?.population}</Card.Text>
        <ButtonGroup>
          <Button className="favButton" onClick={() => actions.toggleFavorite(store.details?.name)} variant="link">
            <i class="fa-solid fa-star"></i>
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
