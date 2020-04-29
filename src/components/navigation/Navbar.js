import React from 'react';
import { Navbar, Container } from "react-bootstrap";

export default () => (
    <Navbar variant="light" className="text-dark shadow">
        <Container>
            <Navbar.Brand href="/" className="text-dark">
                ¡No los Contrates!
            </Navbar.Brand>
        </Container>
    </Navbar>
)