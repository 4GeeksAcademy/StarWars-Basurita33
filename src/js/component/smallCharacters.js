import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SmallCharacters = (character, uid) => {
  const { store, actions } = useContext(Context);

  return (
    <Card className="card-view">
      {/* <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
      /> */}
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>Gender: {character.gender}</Card.Text>
        <Card.Text>Birth-Year:{character.birth_year}</Card.Text>       
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


