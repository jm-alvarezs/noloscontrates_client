import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/navigation/Navbar";
import Buscar from "./views/Buscar";
import Expediente from "./views/Expediente";
import { Router } from "@reach/router";
import SuccessAlert from "./components/common/SuccessAlert";
import ErrorAlert from "./components/common/ErrorAlert";
import ModalConfirm from "./components/common/ModalConfirm";

export default () => (
    <Container fluid={true} className="px-0" style={{ overflowX: "hidden" }}>
        <Navbar />
        <Router>
            <Buscar path="/" />
            <Expediente path="/expediente/:id_expediente/*" />            
        </Router>
        <SuccessAlert />
        <ModalConfirm />
        <ErrorAlert />
    </Container>
);