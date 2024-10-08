import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";

//components
import { SmallCharacters } from "./smallCharacters";

const Characters = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();

  }, []);

  return (
    <Container>
      <Row>
        <Col className="d-flex gap-3 overflow-auto">
          {store.characters.map((character) => {
            return (
              <div me-10>
                <SmallCharacters
                  uid={character.uid}
                  key={character.uid}
                  name={character.name}
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
