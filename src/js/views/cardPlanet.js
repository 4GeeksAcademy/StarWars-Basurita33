import React, { useEffect } from "react";
import { useParams } from "react-router";

export const CardPlanet = () => {
  const { uid } = useParams();

  

  return (
    <Card className="card-view">
      <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
      />
      <Card.Body>
        <Card.Title>{planet.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ButtonGroup>
          <Button onClick={() => actions.toggleFavorite} variant="warning">
            Fav
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
