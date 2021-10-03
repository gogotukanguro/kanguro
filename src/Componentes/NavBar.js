import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function NavBar () {
return (
    <div>
        <Navbar bg={"light"} variant={"light"} expand="lg" fixed={"top"}>
            <div className="container">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    TU KANGURO!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse   id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0 nav-fi"
                        navbarScroll
                    >
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/Reservas">Reservas</Nav.Link>
                        <Nav.Link href="/SobreNosotros">Sobre Nosotros</Nav.Link>
                        <Nav.Link href="/ComoSerKanguro">Como ser Kanguro</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </div>
);
}
