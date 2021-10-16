import React from "react";
import {Col, Form, Row, Button, Alert} from "react-bootstrap";

export default function Formulario () {

    function alerta () {
        alert("Su solicitud se ha enviado correctamente");
    }

    function sendMail() {

    }

    return (
        <Form>
            <Row>
                <Form.Group as={Col} controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="nombre" placeholder="Nombre" />
                </Form.Group>
                <Form.Group as={Col} controlId="formApellidos">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="apellido" placeholder="Apellidos" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group as={Col} controlId="formTelefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="Teléfono" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formFileDisabled" className="mb-3">
                    <Form.Label>Curriculum</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} className="mb-3" controlId="ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Row>

            <Button type="submit" className="mb-2" onClick={() => alerta()}>
                Enviar
            </Button>
        </Form>
    );
}
