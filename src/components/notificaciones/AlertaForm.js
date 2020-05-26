import React from 'react';
import { Container } from "react-bootstrap";
import Input from "../common/Input";

export default function({ alerta, modifier }) {
    const { correo } = alerta;
    return (
        <Container fluid>
            <Input label="Correo electrónico" type="text" value={correo} modifier={modifier} args="correo" />
        </Container>
    )
}