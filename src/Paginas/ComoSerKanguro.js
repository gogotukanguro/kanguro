import React from 'react';
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/footer";
import Header from "../Componentes/header";
import logo from '../logo.svg';

export default function ComoSerKanguro () {
    return(

        <div>
            <NavBar/>
            <Header titulo={"¿Te gustaría trabajar con nosotros?"} descripcion={"descripcion...."} boton={false}/>

            <div className={"Service"}>
                <div className="container">
                    <div className= "row">
                        <div className="col">
                            <h4>¿Cómo trabajamos?</h4>
                        </div>
                        <div className="col">
                            <img src={logo}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className= "row">
                        <div className="col">
                            <h4>Forma Parte de Kanguro</h4>
                        </div>
                        <div className="col">
                            <h4>¿Dónde encontranos?</h4>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>

    );
}
