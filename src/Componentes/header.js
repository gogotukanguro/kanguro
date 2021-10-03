import React from "react";
import '../CSS/header.css';
import {Button} from "react-bootstrap";

export default function Header () {
    return (
        <div className="Header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="HeaderTitle">GOGO! TU KANGURO!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="HeaderSubtitle">Kanguros conocidos y verificados · Con experiencia · Video Vigilados · Servicio 24h</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button variant={"dark"} href={"/Reservas"}>Kanguros</Button>
                    </div>
                </div>
            </div>
        </div>
    );

}
