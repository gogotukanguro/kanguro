import React from "react";
import '../CSS/header.css';
import {Button} from "react-bootstrap";

export default function Header ({titulo, descripcion, boton}) {



    return (
        <div className="Header">
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <h1 className="HeaderTitle">{titulo}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <p className="HeaderSubtitle">{descripcion}</p>
                    </div>
                </div>
                { boton ?
                    <div className="row">
                        <div className="col">
                            <Button variant={"outline-dark"} href={"/Reservas"}>Kanguros</Button>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    );

}
