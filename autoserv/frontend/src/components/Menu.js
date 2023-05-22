import React from "react";
import {Navbar, Nav, Link} from "react-bootstrap";

const Menu = () =>{
    return (
        <container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Orders</Nav.Link>
                        <Nav.Link>Clients</Nav.Link>
                        <Nav.Link>Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </container>
    )
}

export default Menu;