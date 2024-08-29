import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";

//components
import SmallCharacters from "./smallCharacters";

const Characters = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="d-flex overflow-auto">
          {store.characters.map((character, index) => {
            return (
              <div>
                <SmallCharacters
                  uid={character.uid}
                  key={index}
                  item={character}
                  type="characters"
                />
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Characters;
