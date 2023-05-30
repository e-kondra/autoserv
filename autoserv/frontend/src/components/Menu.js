import React from "react";
import {Link} from "react-router-dom"
import {Navbar, Nav} from "react-bootstrap";

const Menu = () =>{
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to='/' className="link-light nav-link">Orders</Link>
                        <Link to='/clients' className="link-light nav-link">Clients</Link>
                        <Link to='/users' className="link-light nav-link">Users</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Menu;