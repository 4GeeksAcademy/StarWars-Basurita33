import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SmallCharacters = ({name, uid}) => {
  const { store, actions } = useContext(Context);

  return (
    <Card className="card-view">
      <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
      />
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <ButtonGroup>
          <Link to={`/cardCharacter/${uid}`}>
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


