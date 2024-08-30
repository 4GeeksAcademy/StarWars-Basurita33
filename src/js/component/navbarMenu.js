import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Image, DropdownButton, DropdownItem, DropdownMenu } from "react-bootstrap";

import "../../styles/navbarMenu.css";
import { Context } from "../store/appContext";

const NavbarMenu = () => {

	const { actions, store } = useContext(Context);

	return (
		<Navbar className="navbar-container">
			<Navbar.Brand>
				<Link to="/">
				    <Image
					  className="navbar-logo"
					  src="https://i.pinimg.com/originals/ee/ec/fb/eeecfb4866cb83c610f0f29400f541ad.png"
					  alt="Star Wars"
					/>
				</Link>
			</Navbar.Brand>
			<DropdownButton title="Favorites" className="navbar-button new-amsterdam-regular">
				<DropdownMenu>
					{/* {store.favorites.map((favorite, index) => {
						return (
							<DropdownItem key={index}>
								{favorite.name}
								<button className="btn btn-danger" onClick={() => actions.deleteFavorite(favorite)}>
									<i className="fas fa-trash-alt"></i>
								</button>
							</DropdownItem>
						)
					})} */}
				</DropdownMenu>

			</DropdownButton>
		</Navbar>
		
	);
};

export default NavbarMenu;