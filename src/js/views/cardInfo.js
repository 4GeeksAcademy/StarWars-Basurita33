import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const CardInfo = (type, id, name) => {
    return (
        <Card className="card-view">
            <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            <ButtonGroup>
                <Button variant="secondary">Learn more</Button>
                <Button variant="warning">Add to favorites</Button>
            </ButtonGroup>        
      </Card.Body>
    </Card>
    )
}

export default CardInfo;