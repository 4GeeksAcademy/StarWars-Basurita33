import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../styles/home.css";
import Characters from "../component/characters";
import Planets from "../component/planets";
import Starships from "../component/starships";


export const Home = () => {
	return (
		<Container>
			<Row>
				<Col>
				   <h2>Characters</h2>
				   <Characters />
				</Col>
			</Row>
			<Row>
				<Col>
				   <h2>Planets</h2>
				   <Planets />
				</Col>
			</Row>
			<Row>
				<Col>
				   <h2>Starships</h2>
				   <Starships />
				</Col>
			</Row>
		</Container>
	);
};
