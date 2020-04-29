import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/navigation/Navbar";
import Buscar from "./views/Buscar";
import Expediente from "./views/Expediente";
import { Router } from "@reach/router";

export default props => (
    <Container fluid={true} className="px-0">
        <Navbar />
        <Router>
            <Buscar path="/" />
            <Expediente path="/expediente/:id_expediente" />
        </Router>
    </Container>
)