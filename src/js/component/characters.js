import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";

//components
import CardInfo from "../views/cardInfo";

const Characters = () => {

    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
    }
    , []);

    return (
        <Container>
            <Row>
                <Col className="d-flex overflow-auto">
                    {store.characters.map((character, index) => {
                        return (
                            <CardInfo key={index} item={character} type="character" />
                        )
                    })}
                </Col>
            </Row>
        </Container>    
    )
}

export default Characters;