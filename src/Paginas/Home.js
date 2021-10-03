import React from 'react';

import NavBar from "../Componentes/NavBar";
import Header from "../Componentes/header";
import Footer from "../Componentes/footer";

import '../CSS/Home.css';
import {Button} from 'react-bootstrap';
export default function Home () {
    return(

        <div>
            <NavBar/>
            <Header/>
            <div className={"Service"}>
                <div className="container">
                    <div className= "row">
                        <div className="col">
                            <h5>Encuentra una kanguro siempre que lo necesites</h5>

                            <ul>
                                <li>Descripción</li>
                            </ul>

                            <Button variant={"dark"}>Reservas</Button>
                        </div>
                        <div className="col">
                            <img src="/public/logo192.png"/>
                        </div>

                    </div>
                    <div className= "row">
                        <div className="col">
                            <img src="/public/logo192.png"/>
                        </div>
                        <div className="col">
                            <h5>Nuestros servicios</h5>
                            <ul>
                                <li>Las mejores cuidadoras</li>
                                <li>Videovigilancia online</li>
                                <li>Servicio 24h / 7 días</li>
                                <li>Nos adaptamos a tus necesidades</li>
                                <li>Bajo la protección de “un seguro”</li>
                            </ul>
                        </div>
                    </div>

                    <div className= "row">
                        <div className="col">
                            <h5>Soluciona problemas puntuales</h5>
                            <ul>
                                <li>Planifica con tiempo</li>
                                <li>Soluciona imprevistos</li>
                                <li>Tiempo para ti</li>
                            </ul>
                        </div>
                        <div className="col">
                            <img src="/public/logo192.png"/>
                        </div>
                    </div>

                    <div className= "row">
                        <div className="col">
                            <img src="/public/logo192.png"/>
                        </div>
                        <div className="col">
                            <h5>¡Soluciona problemas con GoGo! Tu Kanguro…</h5>
                            <ul>
                                <li>Organiza tu tiempo</li>
                                <li>Soluciona imprevistos</li>
                                <li>Tiempo para ti</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

