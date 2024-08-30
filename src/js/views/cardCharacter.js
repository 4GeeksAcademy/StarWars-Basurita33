import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Card, Button, ButtonGroup } from "react-bootstrap";

export const CardCharacter = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDetails(uid, "people");
  }, []);

  return (
    <Card className="big-card">
      <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
      />
      <Card.Body>
        <Card.Title>{store.details?.name}</Card.Title>
        <Card.Text>Gender: {store.details?.gender}</Card.Text>
        <Card.Text>Birth Year: {store.details?.birth_year}</Card.Text>
        <Card.Text>Height: {store.details?.height}</Card.Text>
        <Card.Text>Mass: {store.details?.mass}</Card.Text>
        <ButtonGroup>
          <Button onClick={() => actions.toggleFavorite} variant="warning">
            Fav
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
