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
        src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
      />
      <Card.Body>
        <Card.Title>{store.details?.name}</Card.Title>
        <Card.Text>Climate: {store.details?.climate}</Card.Text>
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
