import React from 'react';

import NavBar from "../Componentes/NavBar";
import Header from "../Componentes/header";
import Footer from "../Componentes/footer";

import '../CSS/Home.css';
import {Button} from 'react-bootstrap';
import logo from '../logo.svg';

export default function Home () {
    return(

        <div>
            <NavBar/>
            <Header titulo={"GOGO! TU KANGURO!"} descripcion={"Kanguros conocidos y verificados · Con experiencia · Video Vigilados · Servicio 24h"} boton={true}/>
            <div className={"Service"}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Encuentra una kanguro siempre que lo necesites</h4>

                            <ul>
                                <li>Descripción</li>
                            </ul>

                            <Button variant={"dark"}>Reservas</Button>
                        </div>
                        <div className="col">
                            <img src={logo}/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={logo}/>
                        </div>
                        <div className="col">
                            <h4>Nuestros servicios</h4>
                            <ul>
                                <li>Las mejores cuidadoras</li>
                                <li>Videovigilancia online</li>
                                <li>Servicio 24h / 7 días</li>
                                <li>Nos adaptamos a tus necesidades</li>
                                <li>Bajo la protección de “un seguro”</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h4>Soluciona problemas puntuales</h4>
                            <ul>
                                <li>Planifica con tiempo</li>
                                <li>Soluciona imprevistos</li>
                                <li>Tiempo para ti</li>
                            </ul>
                        </div>
                        <div className="col">
                            <img src={logo}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <img src={logo}/>
                        </div>
                        <div className="col">
                            <h4>¡Soluciona problemas con GoGo! Tu Kanguro…</h4>
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

