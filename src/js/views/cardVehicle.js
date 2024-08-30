import React, { useEffect, useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

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
