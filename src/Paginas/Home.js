import React from 'react';

import NavBar from "../Componentes/NavBar";
import Header from "../Componentes/header";
import Footer from "../Componentes/footer";

import '../CSS/Home.css';
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

                            <p>  -Descripción o texto para vender/convencer
                                -Botón de ‘Buscar Kanguro’</p>
                        </div>
                        <div className="col">
                            <img/>
                        </div>

                    </div>
                    <div className= "row">
                        <div className="col">
                            <img/>
                        </div>
                        <div className="col">
                            <h5>Nuestros servicios</h5>

                            <p> -Las mejores cuidadoras
                                -Videovigilancia online
                                -Servicio 24h / 7 días
                                -Nos adaptamos a tus necesidades
                                -Bajo la protección de “un seguro”</p>
                        </div>
                    </div>

                    <div className= "row">
                        <div className="col">
                            <h5>Soluciona problemas puntuales</h5>

                            <p> -Planifica con tiempo
                                -Soluciona imprevistos
                                -Tiempo para ti</p>
                        </div>
                        <div className="col">
                            <img/>
                        </div>
                    </div>

                    <div className= "row">
                        <div className="col">
                            <img/>
                        </div>
                        <div className="col">
                            <h5>¡Soluciona problemas con GoGo! Tu Kanguro…</h5>

                            <p>     -Organiza tu tiempo
                                -Soluciona imprevistos
                                -Tiempo para ti</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

