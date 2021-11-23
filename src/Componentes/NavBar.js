import React, {useState, useEffect} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../logo192.png';


export default function NavBar () {
    /*const [variant, setVariant] = useState("light");
    function changeColor () {
      setVariant("dark");
    }
    useEffect(()=>{

    },variant)*/
return (
    <div>
        <Navbar  id={"Navegador"}  expand="lg" fixed="top" >
            <div className="container">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
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
                        <Nav.Link href="/ComoSerKanguro">¿Como ser Kanguro?</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </div>
);
}
