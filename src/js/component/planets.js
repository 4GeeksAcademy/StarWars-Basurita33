import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Context } from "../store/appContext";

import CardInfo from "../views/cardInfo";

const Planets = () => {

    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getPlanets();
    }
    , []);

    return (
        <Container>
            <Row>
                <Col className="d-flex overflow-auto">
                    {store.planets.map((planet, index) => {
                        return (
                            <CardInfo key={index} item={planet} type="planet" />
                        )
                    })}
                </Col>
            </Row>
        </Container>    
    )
}

export default Planets;