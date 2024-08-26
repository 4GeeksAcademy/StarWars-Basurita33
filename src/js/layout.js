import React from "react";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//views:
import { Home } from "./views/home";
import { CardInfo } from "./views/cardInfo";

//components:
import NavbarMenu from "./component/navbarMenu";
import Footer from "./component/footer";

//layout view
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<Container>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Row>
						<Col>
						    <NavbarMenu />
						</Col>
					</Row>
					<Row>
						<Col>
						  <Routes>
							<Route exact path="/" element={<Home />} />
						    <Route path="/card" element={<CardInfo />} />
						    <Route path="*" element={<h1>Not found!</h1>} />
					      </Routes>
					    </Col>
					</Row>
					<Row>
						<Col>
						  <Footer />
						</Col>
					</Row>														
				</ScrollToTop>
			</BrowserRouter>
		</Container>
	);
};

export default injectContext(Layout);
