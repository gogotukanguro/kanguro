import React from 'react';
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/footer";
import Header from "../Componentes/header";

export default function Reservas () {
    return(

        <div>
            <NavBar/>
            <Header titulo={"Kanguros"} descripcion={"Reserva el dia y hora de una manera rápida y sencilla"} boton={false}/>
            <div className="container">
                <div className= "row">
                    <div className="col">
                    </div>
                </div>
            </div>
            <Footer/>

        </div>

    );
}
