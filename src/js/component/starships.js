import React, { useContext, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Context } from "../store/appContext";

import CardInfo from "../views/cardInfo";

const Starships = () => {

    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getStarships();
    }
    , []);

    return (
        <Container>
            <Row>
                <Col className="d-flex overflow-auto">
                    {store.starships.map((starship, index) => {
                        return (
                            <CardInfo key={index} item={starship} type="starship" />
                        )
                    })}
                </Col>
            </Row>
        </Container>    
    )
}

export default Starships;